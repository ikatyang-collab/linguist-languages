import fs from 'node:fs/promises'
import {
  parseFieldDescriptions,
  generateFiles,
  getLanguageData,
  writeFile,
} from './generate.mjs'

const PROJECT_ROOT = new URL('../', import.meta.url)

const languagesContent = await getLanguageData()

await Promise.all(
  ['lib/', 'data/'].map(directory =>
    fs.rm(new URL(directory, PROJECT_ROOT), { recursive: true, force: true }),
  ),
)

await Promise.all(
  Array.from(generateFiles(languagesContent), ({ file, content }) =>
    writeFile(new URL(file, PROJECT_ROOT), content),
  ),
)
