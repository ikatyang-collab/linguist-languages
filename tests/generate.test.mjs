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
} from '../scripts/build/index.js'

expect.addSnapshotSerializer(serializer)

test('field descriptions', async () => {
  const data = await readFile(DATA_FILE)
  const fields = parseFields(data)

  expect(
    Object.fromEntries(
      fields.map(({ name, description }) => [name, description]),
    ),
  ).toMatchSnapshot()
})

test('generateFiles', async () => {
  const file = new URL('./data-for-test.yml', import.meta.url)
  const data = await readFile(file)

  for (const { file, content } of generateFiles(data)) {
    expect(serializer.wrap(content)).toMatchSnapshot(file)
  }
})
