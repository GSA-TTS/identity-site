module.exports = {
  preset: 'ts-jest',
  rootDir: 'spec',
  transform: {
    "\\.(ts|tsx|js|jsx)": "ts-jest",
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@18f/identity-address-search|@18f/identity-i18n|@18f/identity-components)/)',
    '\\.pnp\\.[^\\/]+$',
  ],
  moduleNameMapper: {
    '@18f/identity-address-search':
      '<rootDir>/../node_modules/@18f/identity-address-search/dist/index.js',
    '@18f/identity-i18n': '<rootDir>/../node_modules/@18f/identity-i18n/dist/index.js',
    '@18f/identity-components': '<rootDir>/../node_modules/@18f/identity-components/dist/index.js',
  },
  testMatch: ['**/*_spec.(ts|tsx|js|jsx)'],
  testTimeout: 15000,
  globalSetup: '<rootDir>/e2e/support/setup.js',
  globalTeardown: '<rootDir>/e2e/support/teardown.js',
  testEnvironment: '<rootDir>/e2e/support/puppeteer-environment.cjs',
};
