module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.json', instrument: false },
      { pattern: 'src/**/*.key', instrument: false },
      { pattern: 'src/**/*.csr', instrument: false },
      { pattern: 'src/**/*.crt', instrument: false },
      'src/**/*.ts',
      'test/**/*.ts',
      '!src/**/*.spec.ts',
      '!test/**/*.spec.ts'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({})
    },
    testFramework: 'mocha',
    tests: ['src/**/*.spec.ts', 'test/**/*.spec.ts'],
    debug: true,
    trace: true
  };
};
