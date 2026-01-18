import eslintPluginUnicorn from 'eslint-plugin-unicorn'

export default [
  {
    plugins: { unicorn: eslintPluginUnicorn },
    rules: {
      'unicorn/template-indent': 'error',
    },
  },
]
