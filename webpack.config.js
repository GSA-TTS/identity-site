const { NODE_ENV = 'production' } = process.env;

module.exports = /** @type {import('webpack').Configuration} */ ({
  mode: NODE_ENV,

  entry: {
    main: './assets/js/main.js',
    contact: './assets/js/contact.js',
    partners_contact: './assets/js/partners/contact.js',
    touchpoints_translations: './assets/js/touchpoints_translations.js',
    country_support: './assets/js/country_support.js',
  },

  target: ['web'],

  output: {
    filename: '[name].js',
    path: `${__dirname}/assets/js/build`,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
});
