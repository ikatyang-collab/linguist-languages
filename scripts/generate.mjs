import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import url from 'node:url'
import * as prettier from 'prettier'
import { outdent } from 'outdent'
import { writeFile, fetchText, getType } from './utilities.mjs'
import parseLanguages from './parse-languages.mjs'
import parseFields from './parse-fields.mjs'
import { NAME_FIELD, FILE_BASE_NAME_FIELD } from './constants.mjs'

const DATA_FILES = [
  'https://raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml',
  'https://gh-proxy.com/raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml',
]
const LANGUAGES_FILE_CACHE_FILE = new URL(
  '../.temp/languages.yml',
  import.meta.url,
)
const CACHE_EXPIRE_TIME = 1 * 60 * 60 * 1000 // One hour

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

function* generateFiles(content, options) {
  const languages = parseLanguages(content)
  const fields = parseFields(content, languages)

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

export { generateFiles, getLanguageData }
