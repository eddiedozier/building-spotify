module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: [
    'svelte3',
  ],
  overrides: [{
    files: ['**/*.svelte'],
    processor: 'svelte3/svelte3'
  }],
  rules: {
    'no-debugger': 0,
    'no-alert': 0,
    'space-before-function-paren': 0,
    'consistent-return': 0,
    'comma-dangle': 0,
    'max-len': 0,
    "no-var": 2,
    "no-multi-spaces": 2,
    "no-unreachable": 2,
    'no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'all',
      },
    ],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
  }
};