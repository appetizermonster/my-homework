'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const log = require('./utils/log');
const LISTEN_PORT = 8080;

function runDevServer() {
  const webpackConfig = require('../webpack.config.js');
  const compiler = webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer);
  devServer.listen(LISTEN_PORT, () => {
    log(`WebpackDevServer is listening on ${LISTEN_PORT}...`);
  });
}

module.exports = {
  runDevServer,
  LISTEN_PORT
};
