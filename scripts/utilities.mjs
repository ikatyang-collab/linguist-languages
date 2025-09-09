import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import url from 'node:url'
import { inspect } from 'node:util'
import * as prettier from 'prettier'

export async function writeFile(file, content, { format = true } = {}) {
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

export async function fetchText(url) {
  const response = await fetch(url)
  const text = await response.text()
  return text
}

const primitiveTypes = new Set(['boolean', 'number', 'string'])
export function getType(value) {
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
