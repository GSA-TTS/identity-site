var webpack = require('webpack');

module.exports = {
  entry: {
    'main': './assets/js/main.js',
    'site': './js/build/bundle.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets/js/build'
  },

  devtool: '#cheap-module-eval-source-map',

  resolve: {
    extensions: ['', '.js']
  }
};
