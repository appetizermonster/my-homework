'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const log = require('./utils/log');

function runDevServer() {
  const webpackConfig = require('../webpack.config.js');
  const compiler = webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer);
  const PORT = 8080;
  devServer.listen(PORT, () => {
    log(`WebpackDevServer is listening on ${PORT}... open http://localhost:${PORT}`);
  });
}

module.exports = {
  runDevServer
};
