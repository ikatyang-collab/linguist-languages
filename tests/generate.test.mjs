import url from 'node:url'
import * as serializer from 'jest-snapshot-serializer-raw'
import { test, expect } from 'vitest'
import {
  generateFiles,
  getLanguageData,
  parseFieldDescriptions,
} from '../scripts/generate.mjs'

expect.addSnapshotSerializer(serializer)

const fakeLanguagesYml = `
# Defines all Languages known to GitHub.
#
# fs_name               - Optional field. Only necessary as a replacement for the sample directory name if the
#                         language name is not a valid filename under the Windows filesystem (e.g., if it
#                         contains an asterisk).
# type                  - Either data, programming, markup, prose, or nil
# aliases               - An Array of additional aliases (implicitly
#                         includes name.downcase)
# ace_mode              - A String name of the Ace Mode used for highlighting whenever
#                         a file is edited. This must match one of the filenames in https://gh.io/acemodes.
#                         Use "text" if a mode does not exist.
# codemirror_mode       - A String name of the CodeMirror Mode used for highlighting whenever a file is edited.
#                         This must match a mode from https://git.io/vi9Fx
# codemirror_mime_type  - A String name of the file mime type used for highlighting whenever a file is edited.
#                         This should match the \`mime\` associated with the mode from https://git.io/f4SoQ
# wrap                  - Boolean wrap to enable line wrapping (default: false)
# extensions            - An Array of associated extensions (the first one is
#                         considered the primary extension, the others should be
#                         listed alphabetically)
# filenames             - An Array of filenames commonly associated with the language
# interpreters          - An Array of associated interpreters
# language_id           - Integer used as a language-name-independent indexed field so that we can rename
#                         languages in Linguist without reindexing all the code on GitHub. Must not be
#                         changed for existing languages without the explicit permission of GitHub staff.
# color                 - CSS hex color to represent the language. Only used if type is "programming" or "markup".
# tm_scope              - The TextMate scope that represents this programming
#                         language. This should match one of the scopes listed in
#                         the grammars.yml file. Use "none" if there is no grammar
#                         for this language.
# group                 - Name of the parent language. Languages in a group are counted
#                         in the statistics as the parent language.
#
# Any additions or modifications (even trivial) should have corresponding
# test changes in \`test/test_blob.rb\`.
#
# Please keep this list alphabetized. Capitalization comes before lowercase.
---
Test1:
  type: programming
  color: "#814CCC"
  aliases:
  - hello
  extensions:
  - ".bsl"
  - ".os"
  tm_scope: source.bsl
  ace_mode: text
  language_id: 0
Test Test 2:
  type: programming
  color: "#E8274B"
  extensions:
  - ".abap"
  ace_mode: abap
  wrap: true
  language_id: 1
F*:
  fs_name: Fstar
  type: programming
  color: "#572e30"
  aliases:
  - fstar
  extensions:
  - ".fst"
  tm_scope: source.fstar
  ace_mode: text
  language_id: 336943375
`

test('parseFieldDescriptions', async () => {
  const content = await getLanguageData()
  const fields = parseFieldDescriptions(content)

  expect(fields).toMatchSnapshot()
})

test('generateFiles', async () => {
  for (const { file, content } of generateFiles(fakeLanguagesYml)) {
    expect(serializer.wrap(content)).toMatchSnapshot(
      '<cwd>/' +
        decodeURIComponent(
          file.href.slice(new URL('../ ', import.meta.url).href.length),
        ),
    )
  }
})
