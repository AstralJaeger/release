const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const googleConfig = require('eslint-config-google');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '**/*.d.ts',
      'src/public/**',
      'src/types/**',
    ],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...googleConfig.rules,
      ...prettierConfig.rules,
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
      'prettier/prettier': 'warn',
      // TypeScript handles undefined variable checks
      'no-undef': 'off',
    },
  },
];
