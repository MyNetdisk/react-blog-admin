/** @format */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier/react', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
}
