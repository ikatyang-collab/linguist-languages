declare const _: {
  readonly name: 'SELinux Policy'
  readonly type: 'data'
  readonly aceMode: 'text'
  readonly extensions: readonly ['.te']
  readonly filenames: readonly [
    'file_contexts',
    'genfs_contexts',
    'initial_sids',
    'port_contexts',
    'security_classes',
  ]
  readonly languageId: 880010326
  readonly tmScope: 'source.sepolicy'
  readonly aliases: readonly ['SELinux Kernel Policy Language', 'sepolicy']
}

export default _
