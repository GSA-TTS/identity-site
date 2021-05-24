const { NODE_ENV = 'production' } = process.env;

module.exports = /** @type {import('webpack').Configuration} */ ({
  mode: NODE_ENV,

  entry: {
    main: './assets/js/main.js',
    contact: './assets/js/contact.js',
    touchpoints: './assets/js/touchpoints_translations.js',
  },

  target: ['web', 'es5'],

  output: {
    filename: '[name].js',
    path: __dirname + '/assets/js/build',
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
