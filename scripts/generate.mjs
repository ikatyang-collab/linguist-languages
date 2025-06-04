import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import url from 'node:url'
import { inspect } from 'node:util'
import camelcase from 'camelcase'
import { parse } from 'yaml'
import * as prettier from 'prettier'
import { outdent } from 'outdent'

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

const excludedFields = new Set(['fsName', 'searchable'])

const NAME_FIELD = 'name'

const primitiveTypes = new Set(['boolean', 'number', 'string'])
function getType(value) {
  const type = typeof value

  if (primitiveTypes.has(type)) {
    return type
  }

  if (Array.isArray(value)) {
    const types = value.map(value => getType(value))
    assert(new Set(types).size === 1, `Unexpected value:\n${inspect(value)}`)
    return `${types[0]}[]`
  }

  throw new Error(`Unexpected value:\n${inspect(value)}`)
}

async function fetchText(url) {
  const response = await fetch(url)
  const text = await response.text()
  return text
}

async function writeFile(file, content) {
  const directory = new URL('./', file)
  await fs.mkdir(directory, { recursive: true })
  const formatted = await prettier.format(content, {
    filepath: url.fileURLToPath(file),
    singleQuote: true,
    arrowParens: 'avoid',
    semi: false,
  })
  await fs.writeFile(file, formatted)
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

function* generateFiles(languagesContent, options) {
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
          .map(([key, value]) => [camelcase(key), value])
          .filter(Boolean),
      ),
    }
  })

  const fields = new Map(
    [...new Set(languages.flatMap(language => Object.keys(language)))]
      .filter(field => !excludedFields.has(field))
      .map(field => {
        const description = descriptions[field]
        assert(description, `'${field}' description is required.`)

        const required = languages.every(language =>
          Object.hasOwn(language, field),
        )

        const languagesWithValues = languages
          .map(language =>
            Object.hasOwn(language, field)
              ? { language, value: language[field] }
              : undefined,
          )
          .filter(Boolean)

        let type

        for (const { language, value } of languagesWithValues) {
          const languageValueType = getType(value)
          type ??= languageValueType

          assert.equal(
            type,
            languageValueType,
            `Unmatched field type for '${field}' in '${language.name}'.`,
          )
        }

        return [
          field,
          {
            name: field,
            description,
            required,
            type,
          },
        ]
      }),
  )

  //---------------------------------write-file---------------------------------

  const interfaceIdentifier = 'Language'

  yield {
    file: new URL('./index.js', OUTPUT_LIB_DIRECTORY),
    content: outdent`
    module.exports = {
      ${languages
        .map(
          language =>
            `${JSON.stringify(language.name)}: require(${JSON.stringify(
              `../data/${getDataBasename(language)}`,
            )})`,
        )
        .join(',\n')}
    };
   `,
  }

  // FIXME: use named export once supported
  // Ref: https://github.com/microsoft/TypeScript/issues/40594
  yield {
    file: new URL('./index.mjs', OUTPUT_LIB_DIRECTORY),
    content: outdent`
      ${languages
        .map(
          (language, index) =>
            `import _${index} from ${JSON.stringify(
              `../data/${encodeURIComponent(getDataBasename(language))}.mjs`,
            )}`,
        )
        .join('\n')}

      export default {
        ${languages
          .map(
            (language, index) => `${JSON.stringify(language.name)}: _${index}`,
          )
          .join(',\n')}
      }
    `,
  }

  const namespaceIdentifier = 'LinguistLanguages'
  const languageNameIdentifier = 'LanguageName'
  const interfaceCode = outdent`
    interface ${interfaceIdentifier} {
      ${[...fields.values()]
        .map(
          ({ name, description, required, type }) =>
            outdent`
              /**
              ${description
                .split('\n')
                .map(x => `* ${x}`)
                .join('\n')}
              */
              ${name}${required ? '' : '?'}: ${type};
            `,
        )
        .join('\n')}
    }
  `

  yield {
    file: new URL('./index.d.ts', OUTPUT_LIB_DIRECTORY),
    content: outdent`
      type ${languageNameIdentifier} = ${languages
        .map(language => JSON.stringify(language.name))
        .join('\n| ')};

      declare const ${namespaceIdentifier}: Record<${languageNameIdentifier}, ${namespaceIdentifier}.${interfaceIdentifier}>;

      declare namespace ${namespaceIdentifier} {
        ${interfaceCode}
      }

      export = ${namespaceIdentifier};
    `,
  }

  yield {
    file: new URL('./index.d.mts', OUTPUT_LIB_DIRECTORY),
    content: outdent`
      export type ${languageNameIdentifier} = ${languages
        .map(language => `${JSON.stringify(language.name)}`)
        .join('\n| ')}

      export ${interfaceCode}

      declare const languages: Record<${languageNameIdentifier}, ${interfaceIdentifier}>

      export default languages
    `,
  }

  for (const language of languages) {
    const data = Object.fromEntries(
      [...fields.values()].map(({ name: field }) => [field, language[field]]),
    )
    const dataString = JSON.stringify(data, undefined, 2)

    const basename = encodeURIComponent(getDataBasename(language))
    yield {
      file: new URL(`./${basename}.js`, OUTPUT_DATA_DIRECTORY),
      content: `module.exports = ${dataString}`,
    }
    yield {
      file: new URL(`./${basename}.d.ts`, OUTPUT_DATA_DIRECTORY),
      content: outdent`
        declare const _: ${dataString}
        export = _
      `,
    }
    yield {
      file: new URL(`./${basename}.mjs`, OUTPUT_DATA_DIRECTORY),
      content: `export default ${dataString}`,
    }
    yield {
      file: new URL(`./${basename}.d.mts`, OUTPUT_DATA_DIRECTORY),
      content: outdent`
        declare const _: ${dataString}
        export default _
      `,
    }
  }

  function getDataBasename(language) {
    return language.fsName || language.name
  }
}

if (process.argv.includes('--run')) {
  const languagesContent = await getLanguageData()

  await Promise.all(
    [OUTPUT_LIB_DIRECTORY, OUTPUT_DATA_DIRECTORY].map(directory =>
      fs.rm(directory, { recursive: true, force: true }),
    ),
  )

  await Promise.all(
    [...generateFiles(languagesContent)].map(({ file, content }) =>
      writeFile(file, content),
    ),
  )
}

export { parseFieldDescriptions, generateFiles, getLanguageData }
