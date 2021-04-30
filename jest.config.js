module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      "tsconfig": '<rootDir>/tsconfig.json'
    }
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgr-mock.tsx',
    "@atoms/(.*)": "<rootDir>/src/components/atoms/$1",
    "@molecules/(.*)": "<rootDir>/src/components/molecules/$1",
    "@organisms/(.*)": "<rootDir>/src/components/organisms/$1",
    "@helpers/(.*)": "<rootDir>/src/helpers/$1",
    "@styles/(.*)": "<rootDir>/src/styles/$1",
    "@icons/(.*)": "<rootDir>/src/assets/icons/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/setupTests.ts"
  ]
};