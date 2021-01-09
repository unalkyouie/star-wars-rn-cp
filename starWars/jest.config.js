module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-navigation|react-navigation-drawer|react-navigation-stack|@react-navigation/.*))',
  ],

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
};
