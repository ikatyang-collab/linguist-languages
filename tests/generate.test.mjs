import url from 'node:url'
import fs from 'node:fs/promises'
import * as serializer from 'jest-snapshot-serializer-raw'
import { test, expect } from 'vitest'
import {
  generateFiles,
  parseFields,
  parseLanguages,
  DATA_FILE,
  readFile,
} from '../scripts/build/index.mjs'

expect.addSnapshotSerializer(serializer)

test('field descriptions', async () => {
  const content = await readFile(DATA_FILE)
  const fields = parseFields(content, parseLanguages(content))

  expect(
    Object.fromEntries(
      fields.map(({ name, description }) => [name, description]),
    ),
  ).toMatchSnapshot()
})

test('generateFiles', async () => {
  const fakeYamlFile = new URL('./data-for-test.yml', import.meta.url)
  const fakeLanguagesYml = await readFile(fakeYamlFile)

  for (const { file, content } of generateFiles(fakeLanguagesYml)) {
    expect(serializer.wrap(content)).toMatchSnapshot(file)
  }
})
