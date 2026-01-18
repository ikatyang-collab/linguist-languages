import assert from 'node:assert/strict'
import { outdent } from 'outdent'
import camelcase from 'camelcase'
import { NAME_FIELD, EXCLUDED_FIELDS } from './constants.js'
import { getType } from './utilities.js'
import parseLanguages from './parse-languages.js'

function parseFieldsContent(lines, required) {
  assert(lines.every(line => line.startsWith(' '.repeat(3))))
  lines = lines.map(line => line.slice(3))

  const fields = []
  for (const line of lines) {
    const match = line.match(/^(?<prefix>(?<name>\w+) + - )(?<description>.+)$/)

    if (match) {
      const { name, description, prefix } = match.groups

      fields.push({
        name: camelcase(name),
        description,
        prefixLength: prefix.length,
        required,
      })

      continue
    }

    assert(fields.length > 0)

    const field = fields.at(-1)
    assert(line.startsWith(' '.repeat(field.prefixLength)))
    field.description += '\n' + line.slice(field.prefixLength)
  }

  return fields
}

function parseFields(data, languages = parseLanguages(data)) {
  const expectedHeadText =
    outdent`
      # Defines all languages known to GitHub.
      #
    ` + '\n'

  assert(data.startsWith(expectedHeadText), 'Unexpected data')

  data = data.slice(expectedHeadText.length)

  let lines = data.split('---')[0].trimEnd().split('\n')

  assert(lines.every(line => line === '#' || line.startsWith('# ')))

  lines = lines.map(line => line.slice(2))

  const fields = [
    { name: NAME_FIELD, description: 'Language name.', required: true },
    ...[
      { headText: 'Required fields:', required: true },
      { headText: 'Optional fields:', required: false },
    ].flatMap(({ headText, required }) => {
      const startIndex = lines.indexOf(headText)
      assert(startIndex !== -1, `Missing required text '${headText}'`)
      const endIndex = lines.indexOf('', startIndex)
      assert(endIndex !== -1, `Missing required empty line after '${headText}'`)
      let content = lines.slice(startIndex + 1, endIndex)
      const fields = parseFieldsContent(content, required)
      return fields
    }),
  ].filter(field => !EXCLUDED_FIELDS.has(field.name))

  // Some required property is currently missing
  const getRequiredFromLanguages = field =>
    languages.every(language => Object.hasOwn(language, field.name))
  for (const field of fields) {
    field.required &&= getRequiredFromLanguages(field)
  }

  for (const field of fields) {
    let type
    for (const language of languages) {
      if (Object.hasOwn(language, field.name)) {
        const value = language[field.name]
        const languageValueType = getType(value)
        type ??= languageValueType

        assert.equal(
          type,
          languageValueType,
          `Unmatched field type for '${field.name}' in '${language.name}'.`,
        )

        continue
      }

      if (field.required) {
        throw new Error(
          `Required field '${field.name}' is missing in '${language.name}'.`,
        )
      }
    }

    field.type = type
  }

  return fields
}

export default parseFields
