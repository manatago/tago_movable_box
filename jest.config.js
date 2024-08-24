module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/__test__/*.test.(ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
