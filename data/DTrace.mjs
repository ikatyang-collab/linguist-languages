export default {
  name: 'DTrace',
  type: 'programming',
  extensions: ['.d'],
  tmScope: 'source.c',
  aceMode: 'c_cpp',
  languageId: 85,
  aliases: ['dtrace-script'],
  codemirrorMode: 'clike',
  codemirrorMimeType: 'text/x-csrc',
  interpreters: ['dtrace'],
}
