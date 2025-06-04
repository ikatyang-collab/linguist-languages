import assert from 'node:assert'
import fs from 'node:fs/promises'
import camelcase from 'camelcase'
import { parse } from 'yaml'
import { getFieldType, indent } from './utils.mjs'

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

const excludedFields = new Set(['fsName'])

const NAME_FIELD = 'name'

async function fetchText(url) {
  const response = await fetch(url)
  const text = await response.text()
  return text
}

async function writeFile(file, content) {
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

function parseFieldDescriptions(content) {
  return content
    .match(/#\n((?:#.+\n)+?)#\n/)[1]
    .split('\n')
    .map(x => x.slice(2))
    .join('\n')
    .split(/^(\w+)/m)
    .slice(1)
    .reduce(
      (descriptions, content, index, contents) => {
        if (index % 2 === 1) {
          const rawFieldName = contents[index - 1]
          const fieldName = camelcase(rawFieldName)

          assert(
            fieldName !== NAME_FIELD,
            `Name field '${NAME_FIELD}' should not have desciptions.`,
          )

          if (excludedFields.has(fieldName)) {
            return descriptions
          }

          const alignmentLength = content.indexOf('-') + 2
          descriptions[fieldName] = content
            .trimEnd()
            .split('\n')
            .map((x, i) =>
              x.slice(
                i === 0
                  ? alignmentLength
                  : alignmentLength + rawFieldName.length,
              ),
            )
            .join('\n')
        }
        return descriptions
      },
      { [NAME_FIELD]: 'Language name.' },
    )
}

async function run(languagesContent, options) {
  const { clean = true, write = writeFile } = options || {}

  if (clean) {
    await Promise.all(
      [OUTPUT_LIB_DIRECTORY, OUTPUT_DATA_DIRECTORY].map(directory =>
        fs.rm(directory, { recursive: true, force: true }),
      ),
    )
  }

  const descriptions = parseFieldDescriptions(languagesContent)
  const data = parse(languagesContent)

  const languages = Object.entries(data).map(([name, language]) => {
    assert(
      !Object.hasOwn(language, NAME_FIELD),
      `Conflict field '${NAME_FIELD}' in '${name}' language.`,
    )

    return {
      name,
      ...Object.fromEntries(
        Object.entries(language)
          .map(([key, value]) => {
            // if (excludedFields.has(key)) {
            //   return
            // }

            return [camelcase(key), value]
          })
          .filter(Boolean),
      ),
    }
  })

  const allFields = [
    ...new Set(languages.flatMap(language => Object.keys(language))),
  ].filter(field => !excludedFields.has(field))

  const fieldRequireds = Object.fromEntries(
    allFields.map(field => [
      field,
      languages.every(language => Object.hasOwn(language, field)),
    ]),
  )

  const fieldTypes = {}

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
          .filter(field => !excludedFields.has(field))
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
    function createFieldDefinition(field) {
      return field.type === 'array' ? `${field.subType}[]` : field.type
    }
  }

  await Promise.all(
    languages.map(async language => {
      const data = Object.fromEntries(
        Object.entries(language).filter(
          ([field]) => !excludedFields.has(field),
        ),
      )

      const basename = encodeURIComponent(getDataBasename(language))
      await write(
        new URL(`./${basename}.js`, OUTPUT_DATA_DIRECTORY),
        `module.exports = ${JSON.stringify(data, undefined, 2)}`,
      )
      await write(
        new URL(`./${basename}.d.ts`, OUTPUT_DATA_DIRECTORY),
        [
          `declare const _: ${JSON.stringify(data, undefined, 2)}`,
          'export = _',
        ].join('\n'),
      )
      await write(
        new URL(`./${basename}.mjs`, OUTPUT_DATA_DIRECTORY),
        `export default ${JSON.stringify(data, undefined, 2)}`,
      )
      await write(
        new URL(`./${basename}.d.mts`, OUTPUT_DATA_DIRECTORY),
        [
          `declare const _: ${JSON.stringify(data, undefined, 2)}`,
          'export default _',
        ].join('\n'),
      )
    }),
  )

  function getDataBasename(language) {
    return language.fsName || language.name
  }
}

if (process.argv.includes('--run')) {
  const languagesContent = await getLanguageData()
  await run(languagesContent)
}

export { parseFieldDescriptions, run, getLanguageData }
