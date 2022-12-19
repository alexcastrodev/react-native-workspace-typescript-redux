export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/store/index.ts', // already tested on app
    '<rootDir>/src/index.ts',
    '.types.ts',
    '.config.ts',
  ],
  // globalSetup: '<rootDir>/config/globalSetup.ts',
};
