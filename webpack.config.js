const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const nodeModulesDir = path.join(__dirname, 'node_modules');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./src/client/index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash:12].js'
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: `ngtemplate-loader?relativeTo=${path.join(__dirname, 'src/client')}/!html-loader`,
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap&minimize!sass-loader?sourceMap'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url-loader?limit=10000&name=images/[name].[hash:12].[ext]',
          {
            loader: 'image-webpack-loader',
            query: { bypassOnDebug: true, optimizationLevel: 4, interlaced: false, svgo:{ plugins: [{'removeUselessDefs': false}]}}
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader?limit=10000&publicPath=/&name=fonts/[name].[hash:12].[ext]',
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      compress: false,
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].[contenthash:12].css',
      disable: false,
    }),
    new CommonsChunkPlugin({
      name: 'lib',
      filename: 'lib.[hash:12].js',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(nodeModulesDir) === 0;
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      minify: {
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
      minify: false,
      template: path.join(__dirname, 'src/client/index.html.ejs'),
    }),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      jQuery: 'jquery',
      $: 'jquery'
    })
  ]
}
