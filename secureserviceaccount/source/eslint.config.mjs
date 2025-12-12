import tseslint from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default tseslint.config(
  // below config intentionally skips most of the typescript-eslint rules,
  // retaining the bare minimum necessary to correctly configure the plugin.
  // This is specifically to avoid error messages relating to the liberal use of
  // the any type.
  tseslint.configs.recommendedTypeChecked[0],
  {
    files: ['**/*.ts', '**/*.mts', '**/*.cts'],
  },
  {
    languageOptions: {
      globals: globals.builtin,
      parserOptions: {
        project: true,
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '@typescript-eslint/naming-convention': [
        'error',
        // Use camelCase for function names, class members, interface members.
        {
          'selector': ['classicAccessor', 'autoAccessor', 'enumMember', 'method'],
          'format': ['camelCase'],
        },
        // use PascalCase for exported variables that are not functions
        {
          'selector': ['variable'],
          'format': ['PascalCase'],
          'modifiers': ['exported', 'const'],
        },
        // use camelCase for exported variables that are functions
        {
          'selector': ['variable'],
          'format': ['camelCase'],
          'modifiers': ['exported', 'const'],
          'types': ['function'],
          'filter': {
            'match': false,
            'regex': 'Api(Fp|AxiosParamCreator)$',
          },
        },
        // ... unless their names indicate that they are pre-ES5 compatibility
        // functions that mirror exported classes in the same module
        {
          'selector': ['variable'],
          'format': ['PascalCase'],
          'modifiers': ['exported', 'const'],
          'types': ['function'],
          'filter': {
            'match': true,
            'regex': 'Api(Fp|AxiosParamCreator)$',
          },
        },
        // use camelCase or UPPER_CASE for variable names
        {
          'selector': ['variableLike'],
          'format': ['camelCase', 'UPPER_CASE'],
          'leadingUnderscore': 'allow',
        },
        // Use PascalCase for class names and interface names.
        // Use PascalCase for type names and enum names.
        {
          'selector': ['typeLike'],
          'format': ['PascalCase'],
        },
      ],
      // TS File names use camelCase (e.g. jobPayload.ts or formats.ts)
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'unicorn/filename-case': [
        'error',
        {
          'case': 'camelCase',
        }
      ],
    }
  },
  {
    // this must be in an object by itself - combining with the above deactivates it.
    ignores: [
      '**/dist/',
    ],
  },
);
