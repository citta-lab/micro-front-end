const TerserPlugin = require('terser-webpack-plugin');
const webpackConfig = require('./webpack.config.js');

module.exports = (grunt) => {
  grunt.initConfig({
    webpack: {
      // eslint-disable-next-line
      dev: Object.assign({
        stats: process.env.NODE_ENV === 'development',
        // watch: true,
        optimization: {
          minimizer: [new TerserPlugin({
            extractComments: false,
          })],
        },
      }, webpackConfig),
    },
    eslint: {
      options: {
        configFile: '.eslintrc',
      },
      target: ['src/**/*.js'],
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 8100,
          protocol: 'http',
          hostname: '*',
          base: '.',
          middleware(connect, options, middlewares) {
            middlewares.unshift((req, res, next) => {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
              next();
            });
            return middlewares;
          },
        },
      },
    },
  });


  // Compile (e.g minification)
  grunt.registerTask('default', ['connect:server']);
  grunt.registerTask('compile', ['webpack:dev']);
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-connect');
};
