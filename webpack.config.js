var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var nodeModulesDir = path.join(__dirname, 'node_modules');

module.exports = {
	resolve: {
		modules: ['node_modules', 'bower_components'],
		descriptionFiles: ['package.json', 'bower.json']
	},
	entry: {
		app: ['./src/client/index.js'],
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].[hash:12].js'
	},
	devtool: 'source-map',
	module: {
		loaders:[
			{
				test: /\.html$/,
				loader: 'ngtemplate-loader?relativeTo=' + (path.join(__dirname, 'src/client')) + '/!html-loader'
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader?sourceMap&minimize&importLoaders=1!less-loader?sourceMap'
				})
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader?limit=10000&name=images/[name].[hash:12].[ext]',
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				loader: 'url-loader?limit=10000&name=fonts/[name].[hash:12].[ext]',
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('styles/[name].[contenthash:12].css'),
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
			$: 'jquery',
			jquery: 'jquery'
		})
	]
}
