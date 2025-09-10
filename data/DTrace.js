module.exports = {
  name: 'DTrace',
  type: 'programming',
  aceMode: 'c_cpp',
  extensions: ['.d'],
  languageId: 85,
  tmScope: 'source.c',
  aliases: ['dtrace-script'],
  codemirrorMode: 'clike',
  codemirrorMimeType: 'text/x-csrc',
  interpreters: ['dtrace'],
}
