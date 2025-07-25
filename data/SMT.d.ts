declare const _: {
  name: 'SMT'
  type: 'programming'
  extensions: ['.smt2', '.smt', '.z3']
  tmScope: 'source.smt'
  aceMode: 'text'
  languageId: 330
  interpreters: [
    'boolector',
    'cvc4',
    'mathsat5',
    'opensmt',
    'smtinterpol',
    'smt-rat',
    'stp',
    'verit',
    'yices2',
    'z3',
  ]
}
export = _
