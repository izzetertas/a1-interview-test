module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.scss$": "jest-css-modules-transform",
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  "moduleNameMapper": {
    ".+\\.scss$": require.resolve("./__mocks__/styleMock.js"),
  },
  "transformIgnorePatterns" : [
    "^.d.ts?$"
  ],
}