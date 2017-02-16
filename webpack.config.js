const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = (env = {}) => {
  const stage = env.stage || 'development';
  const debugEnv = env.debug === true;
  const nodeModulesDir = path.join(__dirname, 'node_modules');

  console.log('Stage: ' + stage);
  console.log('Debug mode: ' + debugEnv);

  return {
    devtool: (() => debugEnv ? 'eval-source-map' : 'source-map')(),
    entry: {
      app: ['./src/client/index.js'],
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].[hash:12].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          use:[
            {
              loader: 'ngtemplate-loader',
              options: { relativeTo: `${path.join(__dirname, 'src/client')}`}
            },
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /inline.scss$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                keepSpecialComments: 0,
                minimize: true,
              }
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [`${path.resolve(__dirname, 'src/client/styles/sass')}`]
              }
            },
          ]
        },
        {
          test: /\.(css|scss)$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  keepSpecialComments: 0,
                  sourceMap: true,
                  minimize: true,
                }
              },
              {
                loader: 'postcss-loader',
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [`${path.resolve(__dirname, 'src/client/styles/sass')}`]
                }
              },
            ]
          }),
          exclude: [`${path.resolve(__dirname, 'src/client/styles/inline.scss')}`],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'images/[name].[hash:12].[ext]',
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                gifsicle: { enabled: !debugEnv, interlaced: false },
                mozjpeg: { enabled: !debugEnv },
                optipng: { enabled: !debugEnv, optimizationLevel: 4 },
                pngquant: { enabled: !debugEnv },
                svgo: { enabled: !debugEnv, plugins: [{'removeUselessDefs': false}] }
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            publicPath: '/',
            name: 'fonts/[name].[hash:12].[ext]'
          }
        },
      ]
    },
    plugins: (() => {
      return _.compact([
        new WebpackShellPlugin({
          onBuildStart:[
            `node ${path.join(__dirname, 'script/ng-config.js')} ${stage}`
          ],
        }),
        new ExtractTextPlugin({
          filename: 'styles/[name].[contenthash:12].css',
          disable: debugEnv,
        }),
        (() => {
          if (!debugEnv) return new UglifyJsPlugin({
            compress: true,
            sourceMap: true
          });
        })(),
        new CommonsChunkPlugin({
          name: 'lib',
          filename: 'lib.[hash:12].js',
          minChunks: function (module, _count) {
            return module.resource && module.resource.indexOf(nodeModulesDir) === 0;
          }
        }),
        new HtmlWebpackPlugin({
          inject: false,
          minify: debugEnv ? false : {
            removeComments: true,
            removeCommentsFromCDATA: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            removeAttributeQuotes: true,
            useShortDoctype: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            removeScriptTypeAttributes: true,
            removeStyleTypeAttributes: true,
          },
          template: path.join(__dirname, 'src/client/index.html.ejs'),
        }),
        new webpack.ProvidePlugin({
          'window.jQuery': 'jquery',
          jQuery: 'jquery',
          $: 'jquery'
        })
      ]);
    })(),
  }
}
