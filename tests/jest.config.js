module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverage: false,
  verbose: true,
  testMatch: ['**/tests/integration/**/(*.)+(spec|test).+(ts|tsx|js)'],
  clearMocks: true,
  globalSetup: './jest-setup.ts',
  setupFilesAfterEnv: ['reflect-metadata'],
};
