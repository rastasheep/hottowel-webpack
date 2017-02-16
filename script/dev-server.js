const path = require('path');
const process = require('process');
const nodemon = require('nodemon');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const environment = process.env.NODE_ENV || 'development';
const domain = process.env.DOMAIN || '0.0.0.0';
const clientPort = process.env.CLIENT_PORT || 3000;
const serverPort = process.env.PORT || 3001;
const config = require('../webpack.config.js')({
  debug: true,
  stage: environment,
});

config.entry.app.unshift(`webpack-dev-server/client?http://${domain}:${clientPort}/`);

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true
  }
});
server.listen(clientPort, domain, function() {});

nodemon({
  script: './src/server/app.js',
  delay: 1,
  watch: ['./src/server'],
  ext: 'js json',
  env: {
    'PORT': serverPort,
    'NODE_ENV': environment,
  },
});

nodemon.on('start', function() {
  console.log('*** nodemon started');
}).on('restart', function(ev) {
  console.log('*** nodemon restarted');
  console.log('files changed:\n' + ev);
}).on('crash', function() {
  console.log('*** nodemon crashed: script crashed for some reason');
}).on('exit', function() {
  console.log('*** nodemon exited cleanly');
});
