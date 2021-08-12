const path = require('path');
/**
 * Configuration for Grunt to use while building minification
 * of Adapter.
 */
module.exports = {
  entry: [
    path.resolve(__dirname, 'src/components/adapter/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, './target/release'),
    filename: 'AppThreeAdapter.js',
    library: 'AppThreeAdapter',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
