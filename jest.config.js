module.exports = {
  rootDir: 'spec',
  transformIgnorePatterns: [
    'node_modules/(?!(@18f/identity-address-search)/)',
    '\\.pnp\\.[^\\/]+$',
  ],
  testMatch: ['**/*_spec.[jt]s'],
  globalSetup: '<rootDir>/e2e/support/setup.js',
  globalTeardown: '<rootDir>/e2e/support/teardown.js',
  testEnvironment: '<rootDir>/e2e/support/puppeteer-environment.js',
};
