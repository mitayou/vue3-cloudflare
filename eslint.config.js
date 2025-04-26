import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  {
    ignores: ['node_modules/', 'dist/', 'webpack.config.js']
  },
  {
    // parser: 'vue-eslint-parser',
    // parserOptions: {
    //   parser: '@typescript-eslint/parser',
    //   ecmaVersion: 2020,
    //   sourceType: 'module'
    // },
    // extends: ['eslint:recommended'],
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.vue']
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-mixed-spaces-and-tabs': 'error',
      'template-curly-spacing': ['error', 'never']
    }
  },
  eslintPluginPrettierRecommended
)
