module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['node_modules/@company'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/core',
    '.styles.ts',
    '.types.ts',
    '.config.ts',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/packages/core'],
};
