const path = require('path');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,

    frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon'],
    basePath: './',

    files: [
      './src/client/index.spec.js'
    ],

    exclude: [
      './src/client/tests/server-integration/**/*.spec.js'
    ],

    preprocessors: {
      'src/client/index.spec.js': ['webpack', 'sourcemap'],
      'src/client/app/**/!(*.spec)+(.js)': ['coverage'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders:[
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.html$/, loader: 'ngtemplate-loader?relativeTo=' + (path.join(__dirname, 'src/client')) + '/!html-loader' },
          { test: /\.(png|jpg|gif|svg)$/, loader: 'null-loader' },
          { test: /\.(css|scss)$/, loader: 'null-loader' },
        ],
      },
      plugins: [
        new WebpackShellPlugin({
          onBuildStart:['node ./script/ng-config.js test'],
        }),
        new webpack.ProvidePlugin({
          'window.jQuery': 'jquery',
          jQuery: 'jquery',
          $: 'jquery',
        })
      ]
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: './report/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'text-summary' },
      ]
    },
  });
};
