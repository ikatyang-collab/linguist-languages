import fs from 'node:fs/promises'
import { parseArgs } from 'node:util'
import styleText from 'node-style-text'
import { outdent } from 'outdent'
import {
  generateFiles,
  writeFile,
  fetchText,
  readFile,
  PROJECT_ROOT,
  DATA_URLS,
  DATA_FILE,
  downloadData,
} from './build/index.mjs'

const { values: options } = parseArgs({
  options: {
    update: { type: 'boolean', default: false },
    dry: { type: 'boolean', default: false },
  },
})

let data =
  (options.update ? '' : await readFile(DATA_FILE)) || (await downloadData())

if (!options.dry) {
  await Promise.all(
    ['lib/', 'data/'].map(directory =>
      fs.rm(new URL(directory, PROJECT_ROOT), { recursive: true, force: true }),
    ),
  )
}

await Promise.all(
  Array.from(generateFiles(data), async ({ file, content }) => {
    if (!options.dry) {
      await writeFile(new URL(file, PROJECT_ROOT), content)
    }
    console.log(`${styleText.underline.green(file)} saved.`)
  }),
)
