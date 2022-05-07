// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'no-console': 'warn',
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'windows',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error', {
        'arrays': 'always',
        'objects': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      },
    ]
  }
};
