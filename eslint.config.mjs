import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
      'import': importPlugin,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      // --- STYLISTIC FORMATTING ---
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'], // { user } au lieu de {user}
      '@stylistic/type-annotation-spacing': ['error', { "before": false, "after": true }],

      // --- IMPORT ORDER (Crucial for code quality) ---
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    }
  }
];