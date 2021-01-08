module.exports = {
  rootDir: 'spec/e2e',
  testMatch: ['**/*_spec.js'],
  globalSetup: '<rootDir>/support/setup.js',
  globalTeardown: '<rootDir>/support/teardown.js',
  testEnvironment: '<rootDir>/support/puppeteer-environment.js',
};
