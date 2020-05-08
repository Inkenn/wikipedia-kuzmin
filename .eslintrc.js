module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/destructuring-assignment": 0,
    "class-methods-use-this": 0,
    "no-plusplus": 0,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "no-undef": 0,
    "arrow-parens": 0,
    "no-console": 0,
    "comma-dangle": 0,
    "react/jsx-filename-extension": [0],
    "linebreak-style": 0
    },
};
