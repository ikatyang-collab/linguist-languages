declare const _: {
  readonly name: 'SMT'
  readonly type: 'programming'
  readonly aceMode: 'text'
  readonly extensions: readonly ['.smt2', '.smt', '.z3']
  readonly languageId: 330
  readonly tmScope: 'source.smt'
  readonly interpreters: readonly [
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

export default _
