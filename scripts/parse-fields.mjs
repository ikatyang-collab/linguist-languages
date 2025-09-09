import assert from 'node:assert/strict'
import { outdent } from 'outdent'
import camelcase from 'camelcase'
import { NAME_FIELD, EXCLUDED_FIELDS } from './constants.mjs'
import { getType } from './utilities.mjs'

const orders = [
  'name',
  'type',
  'color',
  'extensions',
  'tmScope',
  'aceMode',
  'languageId',
  'aliases',
  'codemirrorMode',
  'codemirrorMimeType',
  'interpreters',
  'group',
  'filenames',
  'wrap',
]

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

function parseFields(content, languages) {
  const expectedHeadText =
    outdent`
      # Defines all languages known to GitHub.
      #
    ` + '\n'

  assert(content.startsWith(expectedHeadText), 'Unexpected content')

  content = content.slice(expectedHeadText.length)

  let lines = content.split('---')[0].trimEnd().split('\n')

  assert(lines.every(line => line === '#' || line.startsWith('# ')))

  lines = lines.map(line => line.slice(2))

  const fields = new Map(
    [
      { name: NAME_FIELD, description: 'Language name.', required: true },
      ...[
        { headText: 'Required fields:', required: true },
        { headText: 'Optional fields:', required: false },
      ].flatMap(({ headText, required }) => {
        const startIndex = lines.indexOf(headText)
        assert(startIndex !== -1, `Missing required text '${headText}'`)
        const endIndex = lines.indexOf('', startIndex)
        assert(
          endIndex !== -1,
          `Missing required empty line after '${headText}'`,
        )
        let content = lines.slice(startIndex + 1, endIndex)
        const fields = parseFieldsContent(content, required)
        return fields
      }),
    ]
      .toSorted((fieldA, fieldB) => {
        const [indexA, indexB] = [fieldA, fieldB].map(field => {
          const index = orders.indexOf(field.name)
          return index === -1 ? Number.POSITIVE_INFINITY : index
        })

        return indexA - indexB
      })
      .filter(field => !EXCLUDED_FIELDS.has(field.name))
      .map(field => [field.name, field]),
  )

  // Some required property is currently missing
  const getRequiredFromLanguages = field =>
    languages.every(language => Object.hasOwn(language, field.name))
  for (const field of fields.values()) {
    field.required &&= getRequiredFromLanguages(field)
  }

  for (const field of fields.values()) {
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
