const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const googleConfig = require('eslint-config-google');

// Remove rules that were deleted in ESLint v9
const removedInV9 = ['valid-jsdoc', 'require-jsdoc'];
const googleRules = Object.fromEntries(
  Object.entries(googleConfig.rules).filter(([key]) => !removedInV9.includes(key))
);

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
    rules: googleRules,
  },
  {
    files: ['src/**/*.ts'],
    ...prettierConfig,
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
      'prettier/prettier': 'warn',
      // TypeScript handles undefined variable checks
      'no-undef': 'off',
    },
  },
];
