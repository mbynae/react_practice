module.exports = {
  root: true,
  extends: '@react-native-community',
  extends: ['airbnb', 'prettier'], ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'linebreak-style': 0,
  },
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
};
