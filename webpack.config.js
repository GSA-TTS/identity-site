const { NODE_ENV = 'production' } = process.env;

module.exports = /** @type {import('webpack').Configuration} */ ({
  mode: NODE_ENV,

  entry: {
    site: './assets/js/main.js',
  },

  target: ['web', 'es5'],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets/js/build',
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
