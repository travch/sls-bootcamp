module.exports = {
  parser: '@babel/eslint-parser',
  extends: 'eslint:recommended',
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  rules: {
    'no-underscore-dangle': 0,
    'import/first': 0,
    'prefer-destructuring': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
