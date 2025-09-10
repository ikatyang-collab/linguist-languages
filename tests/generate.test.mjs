import url from 'node:url'
import fs from 'node:fs/promises'
import * as serializer from 'jest-snapshot-serializer-raw'
import { test, expect } from 'vitest'
import { generateFiles, getLanguageData } from '../scripts/generate.mjs'
import parseFields from '../scripts/parse-fields.mjs'
import parseLanguages from '../scripts/parse-languages.mjs'

expect.addSnapshotSerializer(serializer)

test('field descriptions', async () => {
  const content = await getLanguageData()
  const fields = parseFields(content, parseLanguages(content))

  expect(
    Object.fromEntries(
      [...fields].map(([name, { description }]) => [name, description]),
    ),
  ).toMatchSnapshot()
})

test('generateFiles', async () => {
  const fakeYamlFile = new URL('./content-for-test.txt', import.meta.url)
  const fakeLanguagesYml = await fs.readFile(fakeYamlFile, 'utf8')

  for (const { file, content } of generateFiles(fakeLanguagesYml)) {
    expect(serializer.wrap(content)).toMatchSnapshot(file)
  }
})
