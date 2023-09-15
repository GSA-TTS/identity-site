module.exports = {
  rootDir: 'spec',
  transformIgnorePatterns: [
    'node_modules/(?!(@18f/identity-address-search|@18f/identity-i18n)/)',
    '\\.pnp\\.[^\\/]+$',
  ],
  moduleNameMapper: {
    '@18f/identity-address-search':
      '<rootDir>/../node_modules/@18f/identity-address-search/dist/index.js',
    '@18f/identity-i18n':
      '<rootDir>/../node_modules/@18f/identity-i18n/dist/index.js',
  },
  testMatch: ['**/*_spec.[jt]s', '**/*_spec.[jt]s?'],
  globalSetup: '<rootDir>/e2e/support/setup.js',
  globalTeardown: '<rootDir>/e2e/support/teardown.js',
  testEnvironment: '<rootDir>/e2e/support/puppeteer-environment.js',
};
