var webpack = require('webpack');

module.exports = {
  mode: 'production',

  entry: {
    'site': './assets/js/main.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets/js/build'
  },

  devtool: '#cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],

  resolve: {
    extensions: ['.js']
  }
};
