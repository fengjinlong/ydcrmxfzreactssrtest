module.exports = {
  //设置识别哪些文件是测试文件（glob形式），与testRegex互斥，不能同时写
  //"**/tests/**/*.ts?(x)",
  testMatch: ["**/?(*.)(spec|test).ts?(x)"],
  //设置识别哪些文件是测试文件（正则形式），与testMatch互斥，不能同时写
  //testRegex: '(/__tests__).*|(\\.|/)(test|spec))\\.jsx?$',
  //测试环境，默认值是：jsdom，可修改为node
  testEnvironment: "jsdom",
  rootDir: "", //默认值：当前目录，一般是package.json所在的目录。
  transform: {
    ".(ts|tsx)": "ts-jest",
    ".(js|jsx)": "babel-jest"
  },
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/client/components$1",
    "^@utils(.*)$": "<rootDir>/src/client/utils$1"
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverage: true,
  coverageDirectory: "./docs/jest-coverage",
  coverageReporters: ["json", "html"],
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"] //测试文件的类型
};
