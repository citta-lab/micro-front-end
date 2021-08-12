const TerserPlugin = require('terser-webpack-plugin');
const webpackConfig = require('./webpack.config.js');

module.exports = (grunt) => {
    grunt.initConfig({
      webpack: {
        // eslint-disable-next-line
        prod: Object.assign({
          stats: process.env.NODE_ENV === 'production',
          optimization: {
            minimizer: [new TerserPlugin({
              extractComments: true,
            })],
          },
        }, webpackConfig),
      }
    });
  
  
    // Compile (e.g minification)
    grunt.registerTask('compile', ['webpack:prod']);
};  