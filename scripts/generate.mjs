import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import { inspect } from 'node:util'
import url from 'node:url'
import * as prettier from 'prettier'
import camelcase from 'camelcase'
import { parse } from 'yaml'
import { outdent } from 'outdent'

const DATA_FILES = [
  'https://raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml',
  'https://gh-proxy.com/raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml',
]
const LANGUAGES_FILE_CACHE_FILE = new URL(
  '../.temp/languages.yml',
  import.meta.url,
)
const CACHE_EXPIRE_TIME = 1 * 60 * 60 * 1000 // One hour

const excludedFields = new Set(['fsName', 'searchable'])

const NAME_FIELD = 'name'
const FILE_BASE_NAME_FIELD = Symbol('FILE_BASE_NAME_FIELD')

const primitiveTypes = new Set(['boolean', 'number', 'string'])
function getType(value) {
  const type = typeof value

  if (primitiveTypes.has(type)) {
    return type
  }

  if (Array.isArray(value)) {
    const types = value.map(value => getType(value))
    assert(new Set(types).size === 1, `Unexpected value:\n${inspect(value)}`)
    return `readonly (${types[0]})[]`
  }

  throw new Error(`Unexpected value:\n${inspect(value)}`)
}

async function fetchText(url) {
  const response = await fetch(url)
  const text = await response.text()
  return text
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

  await writeFile(LANGUAGES_FILE_CACHE_FILE, text, { format: false })

  return text
}

function parseFieldDescriptions(content) {
  const descriptions = { [NAME_FIELD]: 'Language name.' }

  let fieldName
  let alignmentLength
  for (const [line] of content.matchAll(/(?<=\n)# (?:\w+ + -| +) .+(?=\n)/g)) {
    const match = line.match(/^# (?<field>\w+) + - (?<content>.+)$/)
    if (match) {
      const { field, content } = match.groups

      assert(
        fieldName !== NAME_FIELD,
        `Name field '${NAME_FIELD}' should not have descriptions.`,
      )

      fieldName = camelcase(field)

      descriptions[fieldName] = content
      alignmentLength = line.length - content.length
      continue
    }

    assert(
      fieldName &&
        alignmentLength &&
        line.startsWith('#' + ' '.repeat(alignmentLength - 1)),
      `Unexpected line:\n${line}`,
    )

    descriptions[fieldName] += `\n${line.slice(alignmentLength)}`
  }

  for (const fieldName of excludedFields) {
    delete descriptions[fieldName]
  }

  return descriptions
}

function* generateFiles(languagesContent, options) {
  const descriptions = parseFieldDescriptions(languagesContent)
  const seenFileBaseNames = new Set()

  const data = parse(languagesContent)

  const languages = Object.entries(data).map(([name, language]) => {
    assert(
      !Object.hasOwn(language, NAME_FIELD),
      `Conflict field '${NAME_FIELD}' in '${name}' language.`,
    )

    const fileBaseName = getFileName(name)
    const lowercasedFileBaseName = fileBaseName.toLocaleLowerCase()

    assert(
      !seenFileBaseNames.has(lowercasedFileBaseName),
      `File base name already exists '${fileBaseName}'.`,
    )
    seenFileBaseNames.add(lowercasedFileBaseName)

    return {
      [NAME_FIELD]: name,
      [FILE_BASE_NAME_FIELD]: fileBaseName,
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
    file: 'lib/index.js',
    content: outdent`
    module.exports = {
      ${languages
        .map(
          language =>
            `${JSON.stringify(language.name)}: require(${JSON.stringify(
              `../data/${language[FILE_BASE_NAME_FIELD]}`,
            )})`,
        )
        .join(',\n')}
    };
   `,
  }

  yield {
    file: 'lib/index.mjs',
    content: languages
      .map(
        language =>
          outdent`
            export {
              default as ${JSON.stringify(language.name)}
            } from ${JSON.stringify(
              `../data/${language[FILE_BASE_NAME_FIELD]}.mjs`,
            )};
          `,
      )
      .join('\n'),
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
              readonly ${name}${required ? '' : '?'}: ${type};
            `,
        )
        .join('\n')}
    }
  `

  yield {
    file: 'lib/index.d.ts',
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
    file: 'lib/index.d.mts',
    content: outdent`
      export type ${languageNameIdentifier} = ${languages
        .map(language => `${JSON.stringify(language.name)}`)
        .join('\n| ')};

      export ${interfaceCode};

      ${languages
        .map(
          language =>
            outdent`
              export {
                default as ${JSON.stringify(language.name)},
              } from ${JSON.stringify(
                `../data/${language[FILE_BASE_NAME_FIELD]}.mjs`,
              )};
            `,
        )
        .join('\n')}
    `,
  }

  for (const language of languages) {
    const data = Object.fromEntries(
      [...fields.values()].map(({ name: field }) => [field, language[field]]),
    )
    const dataString = JSON.stringify(data, undefined, 2)

    const basename = language[FILE_BASE_NAME_FIELD]
    yield {
      file: `data/${basename}.js`,
      content: `module.exports = ${dataString}`,
    }
    yield {
      file: `data/${basename}.d.ts`,
      content: outdent`
        declare const _: ${dataString}
        export = _
      `,
    }
    yield {
      file: `data/${basename}.mjs`,
      content: `export default ${dataString}`,
    }
    yield {
      file: `data/${basename}.d.mts`,
      content: outdent`
        declare const _: ${dataString}
        export default _
      `,
    }
  }
}

function getFileName(name) {
  const filename = [...name]
    .map(character =>
      /[0-9a-zA-Z\-\.]/.test(character)
        ? character
        : `_${character.codePointAt(0).toString(16)}_`,
    )
    .join('')

  assert(
    encodeURIComponent(filename) === filename,
    `Can not generate filename for '${name}'`,
  )

  return filename
}

async function writeFile(file, content, { format = true } = {}) {
  const directory = new URL('./', file)
  await fs.mkdir(directory, { recursive: true })

  content = format
    ? await prettier.format(content, {
        filepath: url.fileURLToPath(file),
        singleQuote: true,
        arrowParens: 'avoid',
        semi: false,
      })
    : content

  await fs.writeFile(file, content)
}

export { parseFieldDescriptions, generateFiles, getLanguageData, writeFile }
