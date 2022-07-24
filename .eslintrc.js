module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent-props': [2, 'multiline'],
    'react/jsx-max-props-per-line': [1, { when: 'always' }]
  }
}
