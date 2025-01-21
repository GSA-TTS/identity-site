import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const { NODE_ENV = 'production' } = process.env;
const webpackConfigDir = dirname(fileURLToPath(import.meta.url));

export default /** @type {import('webpack').Configuration} */ ({
  mode: NODE_ENV,
  entry: {
    main: './assets/js/main.js',
    contact: './assets/js/contact.js',
    contact_us_form_element: './assets/js/contact_us_form_element.ts',
    cms: './assets/js/admin/cms.js',
    faqs: './assets/js/faqs.js',
    partners_contact: './assets/js/partners/contact.js',
    touchpoints: ['./assets/js/touchpoints_translations.js', './assets/js/touchpoints_58f51d4d.js'],
    country_support: './assets/js/country_support.js',
    post_office_search: './assets/js/post_office_search.tsx',
  },
  target: ['web'],
  output: {
    filename: '[name].js',
    path: `${webpackConfigDir}/_site/assets/js`,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devtool: 'source-map',
});
