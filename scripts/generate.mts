import assert from 'node:assert'
import fs from 'node:fs/promises'
import camelcase from 'camelcase'
import { parse } from 'yaml'
import { getFieldType, Field, indent } from './utils.mjs'

const DATA_FILES = [
  'https://raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml',
  'https://gh-proxy.com/raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml',
]
const OUTPUT_LIB_DIRECTORY = new URL('../lib/', import.meta.url)
const OUTPUT_DATA_DIRECTORY = new URL('../data/', import.meta.url)
const LANGUAGES_FILE_CACHE_FILE = new URL(
  '../.temp/languages.yml',
  import.meta.url,
)
const CACHE_EXPIRE_TIME = 1 * 60 * 60 * 1000 // One hour

const NAME_FIELD = 'name'

async function fetchText(url: string) {
  const response = await fetch(url)
  const text = await response.text()
  return text
}

async function writeFile(file: URL, content: string) {
  const directory = new URL('./', file)
  await fs.mkdir(directory, { recursive: true })
  await fs.writeFile(file, content + '\n')
}

async function getLanguageData() {
  let stats
  try {
    stats = await fs.stat(LANGUAGES_FILE_CACHE_FILE)
  } catch {
    // No op
  }

  if (stats?.mtimeMs && stats.mtimeMs > Date.now() - CACHE_EXPIRE_TIME) {
    return fs.readFile(LANGUAGES_FILE_CACHE_FILE, 'utf8')
  }

  const text = await Promise.any(DATA_FILES.map(url => fetchText(url)))

  await writeFile(LANGUAGES_FILE_CACHE_FILE, text)

  return text
}

export async function run(
  languagesContent: string,
  options?: {
    clean?: boolean
    read?: (filename: URL) => string
    write?: (filename: URL, content: string) => void
  },
) {
  /* c8 ignore start */
  const { clean = true, write = writeFile } = options || {}
  /* c8 ignore stop */

  /* c8 ignore start */
  if (clean) {
    await Promise.all(
      [OUTPUT_LIB_DIRECTORY, OUTPUT_DATA_DIRECTORY].map(directory =>
        fs.rm(directory, { recursive: true, force: true }),
      ),
    )
  }
  /* c8 ignore stop */

  interface Language {
    name: string
    fsName?: string
    [key: string]: any
  }

  const descriptions = languagesContent
    .match(/#\n((?:#.+\n)+?)#\n/)![1]
    .split('\n')
    .map(x => x.slice(2))
    .join('\n')
    .split(/^(\w+)/m)
    .slice(1)
    .reduce(
      (descriptions, content, index, contents) => {
        if (index % 2 === 1) {
          const fieldName = contents[index - 1]
          const alignmentLength = content.indexOf('-') + 2
          descriptions[camelcase(fieldName)] = content
            .trimEnd()
            .split('\n')
            .map((x, i) =>
              x.slice(
                i === 0 ? alignmentLength : alignmentLength + fieldName.length,
              ),
            )
            .join('\n')
        }
        return descriptions
      },
      {} as { [fieldName: string]: string },
    )

  const languages = (rawLanguage =>
    Object.keys(rawLanguage).map((name: keyof typeof rawLanguage): Language => {
      const language = rawLanguage[name]

      assert(
        !(NAME_FIELD in language),
        `Conflict field ${NAME_FIELD} in ${name}`,
      )

      return Object.keys(language).reduce(
        (reduced, fieldName) =>
          Object.assign(reduced, {
            [camelcase(fieldName)]: language[fieldName],
          }),
        { name },
      )
    }))(parse(languagesContent) as Record<string, any>)

  /**
   * - true: required
   * - false: optional
   */
  const fieldRequireds: Record<string, boolean> = {}

  languages.forEach(language => {
    Object.keys(language).forEach(fieldName => {
      // find all fields
      fieldRequireds[fieldName] = true
    })
  })

  languages.forEach(language => {
    Object.keys(fieldRequireds).forEach(fieldName => {
      if (!(fieldName in language)) {
        // mark optional fields
        fieldRequireds[fieldName] = false
      }
    })
  })

  const fieldTypes: Record<string, Field> = {}

  languages.forEach(language => {
    Object.keys(language).forEach(fieldName => {
      const fieldType = getFieldType(language[fieldName])
      if (!(fieldName in fieldTypes)) {
        fieldTypes[fieldName] = fieldType
      }

      assert.deepEqual(
        fieldType,
        fieldTypes[fieldName],
        `Unmatched field type for ${fieldName} in ${language.name}:\n\n` +
          `${JSON.stringify(fieldName, null, 2)}`,
      )
    })
  })

  //---------------------------------write-file---------------------------------

  const interfaceIdentifier = 'Language'

  // FIXME: use named export once supported
  // Ref: https://github.com/microsoft/TypeScript/issues/40594

  await write(
    new URL('./index.js', OUTPUT_LIB_DIRECTORY),
    `module.exports = {\n${languages
      .map(
        language =>
          `  ${JSON.stringify(language.name)}: require(${JSON.stringify(
            `../data/${getDataBasename(language)}`,
          )})`,
      )
      .join(',\n')}\n};`,
  )

  await write(
    new URL('./index.mjs', OUTPUT_LIB_DIRECTORY),
    [
      ...languages.map(
        (language, i) =>
          `import _${i} from ${JSON.stringify(
            `../data/${encodeURIComponent(getDataBasename(language))}.mjs`,
          )}`,
      ),
      `export default {`,
      ...languages.map(
        (language, index) => `  ${JSON.stringify(language.name)}: _${index},`,
      ),
      `}`,
    ].join('\n'),
  )

  {
    const namespaceIdentifier = 'LinguistLanguages'
    const languageNameIdentifier = 'LanguageName'

    await write(
      new URL('./index.d.ts', OUTPUT_LIB_DIRECTORY),
      [
        `type ${languageNameIdentifier} =\n${indent(
          languages
            .map(language => `| ${JSON.stringify(language.name)}`)
            .join('\n'),
        )};`,
        `declare const ${namespaceIdentifier}: Record<${languageNameIdentifier}, ${namespaceIdentifier}.${interfaceIdentifier}>;`,
        `declare namespace ${namespaceIdentifier} {\n${indent(
          createInterface(),
        )}\n}`,
        `export = ${namespaceIdentifier};`,
      ].join('\n\n'),
    )

    await write(
      new URL('./index.d.mts', OUTPUT_LIB_DIRECTORY),
      [
        `export type ${languageNameIdentifier} =\n${indent(
          languages
            .map(language => `| ${JSON.stringify(language.name)}`)
            .join('\n'),
        )}`,
        `export ${createInterface()}`,
        `declare const languages: Record<${languageNameIdentifier}, ${interfaceIdentifier}>`,
        `export default languages`,
      ].join('\n\n'),
    )

    function createInterface() {
      return `interface ${interfaceIdentifier} {\n${indent(
        Object.keys(fieldTypes)
          .map(
            fieldName =>
              (fieldName in descriptions
                ? '/**\n' +
                  descriptions[fieldName]
                    .split('\n')
                    .map(x => ` * ${x}`)
                    .join('\n') +
                  '\n */\n'
                : '') +
              `${fieldName}${
                fieldRequireds[fieldName] ? '' : '?'
              }: ${createFieldDefinition(fieldTypes[fieldName])}`,
          )
          .join('\n'),
      )}\n}`
    }
    function createFieldDefinition(field: Field) {
      return field.type === 'array' ? `${field.subType}[]` : field.type
    }
  }

  await Promise.all(
    languages.map(async language => {
      const basename = encodeURIComponent(getDataBasename(language))
      await write(
        new URL(`./${basename}.js`, OUTPUT_DATA_DIRECTORY),
        `module.exports = ${JSON.stringify(language, null, 2)}`,
      )
      await write(
        new URL(`./${basename}.d.ts`, OUTPUT_DATA_DIRECTORY),
        [
          `declare const _: ${JSON.stringify(language, null, 2)}`,
          'export = _',
        ].join('\n'),
      )
      await write(
        new URL(`./${basename}.mjs`, OUTPUT_DATA_DIRECTORY),
        `export default ${JSON.stringify(language, null, 2)}`,
      )
      await write(
        new URL(`./${basename}.d.mts`, OUTPUT_DATA_DIRECTORY),
        [
          `declare const _: ${JSON.stringify(language, null, 2)}`,
          'export default _',
        ].join('\n'),
      )
    }),
  )

  function getDataBasename(language: Language) {
    return language.fsName || language.name
  }
}

/* c8 ignore start */
if (process.argv[2] === 'run') {
  const languagesContent = await getLanguageData()
  await run(languagesContent)
}
/* c8 ignore stop */
