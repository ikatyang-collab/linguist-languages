declare const _: {
  readonly name: 'Markdown'
  readonly type: 'prose'
  readonly aceMode: 'markdown'
  readonly extensions: readonly [
    '.md',
    '.livemd',
    '.markdown',
    '.mdown',
    '.mdwn',
    '.mkd',
    '.mkdn',
    '.mkdown',
    '.ronn',
    '.scd',
    '.workbook',
  ]
  readonly filenames: readonly ['contents.lr']
  readonly languageId: 222
  readonly tmScope: 'text.md'
  readonly aliases: readonly ['md', 'pandoc']
  readonly codemirrorMode: 'gfm'
  readonly codemirrorMimeType: 'text/x-gfm'
  readonly color: '#083fa1'
  readonly wrap: true
}

export default _
