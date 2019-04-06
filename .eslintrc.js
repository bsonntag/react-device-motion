module.exports = {
  env: {
    browser: 1,
  },
  extends: 'seegno',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'id-length': [
      'error',
      {
        exceptions: ['_', 'e', 'i', 'x', 'y', 'z'],
      },
    ],
    'no-confusing-arrow': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
