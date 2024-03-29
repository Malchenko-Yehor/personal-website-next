module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgr-mock.tsx',
    '@atoms/(.*)': '<rootDir>/src/components/atoms/$1',
    '@molecules/(.*)': '<rootDir>/src/components/molecules/$1',
    '@organisms/(.*)': '<rootDir>/src/components/organisms/$1',
    '@layouts/(.*)': '<rootDir>/src/components/layouts/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@icons/(.*)': '<rootDir>/src/assets/icons/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@slices/(.*)': '<rootDir>/src/stores/slices/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@stores/(.*)': '<rootDir>/src/stores/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
