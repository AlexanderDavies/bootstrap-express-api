module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './reports',
  testMatch: ['**/src/**/*.spec.ts', '**/test/**/*.spec.ts'],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80
      // statements: -10
    }
  }
};
