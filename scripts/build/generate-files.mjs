import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import url from 'node:url'
import * as prettier from 'prettier'
import { outdent } from 'outdent'
import { writeFile, fetchText, getType } from './utilities.mjs'
import parseLanguages from './parse-languages.mjs'
import parseFields from './parse-fields.mjs'
import { NAME_FIELD, FILE_BASE_NAME_FIELD } from './constants.mjs'

function* generateFiles(data, options) {
  const languages = parseLanguages(data)
  const fields = parseFields(data, languages)

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
      ${fields
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

  const fieldNames = new Set(fields.map(({ name }) => name))
  for (const language of languages) {
    for (const key of Object.keys(language)) {
      if (!fieldNames.has(key)) {
        throw new Error(`Unexpected property '${key}' in '${language.name}'.`)
      }
    }

    const data = Object.fromEntries(
      fields.map(({ name: field }) => [field, language[field]]),
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

export default generateFiles
