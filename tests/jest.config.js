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
  setupFilesAfterEnv: ['reflect-metadata', './jest-setup.ts'],
};
