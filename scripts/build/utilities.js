import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import url from 'node:url'
import { inspect } from 'node:util'
import * as prettier from 'prettier'

export async function readFile(file) {
  try {
    return await fs.readFile(file, 'utf8')
  } catch {
    return ''
  }
}

export async function writeFile(file, content, { format = true } = {}) {
  const directory = new URL('./', file)
  await fs.mkdir(directory, { recursive: true })

  if (format) {
    content = await prettier.format(content, {
      filepath: url.fileURLToPath(file),
      singleQuote: true,
      arrowParens: 'avoid',
      semi: false,
    })
  }

  await fs.writeFile(file, content)
}

export async function fetchText(url) {
  const urlObject = new URL(url)
  const urls =
    urlObject.hostname.endsWith('.github.com') ||
    urlObject.hostname.endsWith('raw.githubusercontent.com')
      ? [
          url,
          `https://gh-proxy.org/${url}`,
          `https://hk.gh-proxy.org/${url}`,
          `https://cdn.gh-proxy.org/${url}`,
          `https://edgeone.gh-proxy.org/${url}`,
        ]
      : [url]
  const text = await Promise.any(
    urls.map(async url => {
      const response = await fetch(url)
      if (!response.ok) {
        throw Object.assign(new Error(`Request '${url}' failure.`), {
          response,
        })
      }
      return response.text()
    }),
  )
  return text
}

export async function downloadText({ url, cacheFile }) {
  let stat
  try {
    stat = await fs.stat(cacheFile)
  } catch {}

  if (stat) {
    if (Date.now() - stat.ctimeMs < /* 10 hours */ 10 * 60 * 60 * 1000) {
      return fs.readFile(cacheFile, 'utf8')
    }

    await fs.rm(cacheFile)
  }

  const text = await fetchText(url)

  await fs.mkdir(new URL('./', cacheFile), { recursive: true })
  await fs.writeFile(cacheFile, text)

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
