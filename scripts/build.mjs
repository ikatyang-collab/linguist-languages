import fs from 'node:fs/promises'
import * as prettier from 'prettier'
import {
  parseFieldDescriptions,
  generateFiles,
  getLanguageData,
} from './generate.mjs'

const PROJECT_ROOT = new URL('../', import.meta.url)

const languagesContent = await getLanguageData()

await Promise.all(
  ['lib/', 'data/'].map(directory =>
    fs.rm(new URL(directory, PROJECT_ROOT), { recursive: true, force: true }),
  ),
)

await Promise.all(
  [...generateFiles(languagesContent)].map(({ file, content }) =>
    writeFile(file, content),
  ),
)

async function writeFile(fileName, content) {
  const file = new URL(fileName, PROJECT_ROOT)
  const directory = new URL('./', file)
  await fs.mkdir(directory, { recursive: true })
  const formatted = await prettier.format(content, {
    filepath: fileName,
    singleQuote: true,
    arrowParens: 'avoid',
    semi: false,
  })
  await fs.writeFile(file, formatted)
}
