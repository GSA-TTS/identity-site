const { NODE_ENV = 'production' } = process.env;

module.exports = /** @type {import('webpack').Configuration} */ ({
  mode: NODE_ENV,

  entry: {
    main: './assets/js/main.js',
    contact: './assets/js/contact.js',
    contact_us_form_element: './assets/js/contact_us_form_element.ts',
    faqs: './assets/js/faqs.js',
    partners_contact: './assets/js/partners/contact.js',
    touchpoints_translations: './assets/js/touchpoints_translations.js',
    country_support: './assets/js/country_support.js',
  },

  target: ['web'],

  output: {
    filename: '[name].js',
    path: `${__dirname}/_site/assets/js`,
  },

  resolve: {
    alias: {
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      'react/jsx-runtime': 'react/jsx-runtime.js',
      'core-js/modules/web.url': 'core-js/modules/web.url.js',
      'core-js/modules/web.immediate': 'core-js/modules/web.immediate.js'
    },
  },

  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  devtool: false,
});
