const { resolve } = require('path');
const { NODE_ENV = 'production' } = process.env;

module.exports = /** @type {import('webpack').Configuration} */ ({
  mode: NODE_ENV,

  entry: {
    main: './assets/js/main.js',
    contact: './assets/js/contact.js',
    touchpoints_translations: './assets/js/touchpoints_translations.js',
    country_support: './assets/js/country_support.js',
  },

  resolve: {
    alias: {
      // TEMPORARY: Alias `identity-style-guide` to source only while pointing at GitHub branch
      'identity-style-guide': resolve(__dirname, 'node_modules/identity-style-guide/src/js'),
    },
  },

  target: ['web', 'es5'],

  output: {
    filename: '[name].js',
    path: `${__dirname}/assets/js/build`,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!uswds|receptor)/,
        use: ['babel-loader'],
      },
    ],
  },
});
