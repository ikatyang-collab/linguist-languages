export const NAME_FIELD = 'name'
export const FILE_BASE_NAME_FIELD = Symbol('FILE_BASE_NAME_FIELD')
export const EXCLUDED_FIELDS = new Set(['fsName', 'searchable'])
export const DATA_URLS = [
  'https://raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml',
  'https://gh-proxy.com/raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml',
]
export const PROJECT_ROOT = new URL('../../', import.meta.url)
export const DATA_FILE = new URL('../data.yml', import.meta.url)
