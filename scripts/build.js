import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { parseArgs } from 'node:util'
import styleText from 'node-style-text'
import { outdent } from 'outdent'
import {
  generateFiles,
  writeFile,
  readFile,
  PROJECT_ROOT,
  downloadText,
  DATA_FILE,
  serializeData,
  deserializeData,
} from './build/index.js'

const { values: options } = parseArgs({
  options: {
    update: { type: 'boolean', default: false },
    dry: { type: 'boolean', default: false },
    'save-version-file': { type: 'boolean', default: false },
  },
})

let data
if (options.update) {
  const releasesText = await downloadText({
    url: 'https://api.github.com/repos/github-linguist/linguist/releases/latest',
    cacheFile: new URL('./.cache/releases-latest.json', PROJECT_ROOT),
  })
  const { tag_name: tagName } = JSON.parse(releasesText)

  assert.ok(tagName.startsWith('v'))
  const version = tagName.slice(1)

  const text = await downloadText({
    url: `https://raw.githubusercontent.com/github-linguist/linguist/refs/tags/${tagName}/lib/linguist/languages.yml`,
    cacheFile: new URL(`./.cache/${tagName}-languages.yml`, PROJECT_ROOT),
  })
  data = await serializeData(DATA_FILE, { version, text })
} else {
  data = await deserializeData(DATA_FILE)
}

if (!options.dry) {
  await fs.rm(new URL('./data/', PROJECT_ROOT), {
    recursive: true,
    force: true,
  })
}

await Promise.all(
  Array.from(generateFiles(data.text), async ({ file, content }) => {
    if (!options.dry) {
      await writeFile(new URL(file, PROJECT_ROOT), content)
    }
    console.log(`${styleText.underline.green(file)} saved.`)
  }),
)

if (options['save-version-file']) {
  // Save version number to `LINGUIST_VERSION` on CI
  await fs.writeFile(
    new URL('../LINGUIST_VERSION', import.meta.url),
    data.version,
  )
}
