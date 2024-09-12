import pluginJs from "@eslint/js";
import pluginImport from 'eslint-plugin-import';
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      "react": {
        "createClass": "createReactClass",
        "pragma": "React",
        "fragment": "Fragment",
        "version": "detect",
        "defaultVersion": "",
        "flowVersion": "0.53"
      },
    },
    plugins: {
      "import": pluginImport,
    },
    rules: {
      // 同じディレクトリからのimportを許可しない
      'import/no-duplicates': ['warn'],
      // Pathの末尾に不要なスラッシュを許可しない
      'import/no-useless-path-segments': ['warn'],
      // 自己参照を許可しない
      'import/no-self-import': ['error'],
      // 参照の循環を許可しない
      'import/no-cycle': ['error'],
      // import文の順番を強制
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'unknown',
            'parent',
            'sibling',
            'index',
            'object',
            'type'
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before',
            },
          ],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
      // as句を許可しない
      '@typescript-eslint/consistent-type-assertions': ['error'],
      // varを許可しない
      '@typescript-eslint/no-unused-vars': ['error'],
      // any型を許可しない
      '@typescript-eslint/no-explicit-any': ['error'],

      "react/jsx-uses-react": ["off"],
      "react/react-in-jsx-scope": ["off"]
    }
  }
];