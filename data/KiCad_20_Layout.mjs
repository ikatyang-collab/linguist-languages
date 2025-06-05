export default {
  name: 'KiCad Layout',
  type: 'data',
  color: '#2f4aab',
  extensions: ['.kicad_pcb', '.kicad_mod', '.kicad_wks'],
  tmScope: 'source.pcb.sexp',
  aceMode: 'lisp',
  languageId: 187,
  aliases: ['pcbnew'],
  codemirrorMode: 'commonlisp',
  codemirrorMimeType: 'text/x-common-lisp',
  filenames: ['fp-lib-table'],
}
