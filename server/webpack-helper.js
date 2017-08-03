'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const log = require('./utils/log');

function runDevServer() {
  const webpackConfig = require('../webpack.config.js');
  const compiler = webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer);
  devServer.listen(8080, () => {
    log('WebpackDevServer is listening...');
  });
}

module.exports = {
  runDevServer
};
