var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('../webpack.config.js');

config.entry.app.unshift('webpack-dev-server/client?http://0.0.0.0:3000/');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true
  }
});
server.listen(3000, '0.0.0.0', function() {});
