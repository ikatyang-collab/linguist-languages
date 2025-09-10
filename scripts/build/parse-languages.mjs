import assert from 'node:assert/strict'
import camelcase from 'camelcase'
import { parse as parseYaml } from 'yaml'
import {
  NAME_FIELD,
  FILE_BASE_NAME_FIELD,
  EXCLUDED_FIELDS,
} from './constants.mjs'

function parseLanguages(content) {
  const seenFileBaseNames = new Set()
  const data = parseYaml(content)

  return Object.entries(data).map(([name, language]) => {
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
          .filter(([key]) => !EXCLUDED_FIELDS.has(key)),
      ),
    }
  })
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

export default parseLanguages
