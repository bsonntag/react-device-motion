module.exports = {
  env: {
    browser: 1,
  },
  extends: '@bsonntag',
  rules: {
    'id-length': [
      'error',
      {
        min: 2,
        exceptions: ['x', 'y', 'z'],
      },
    ],
  },
};
