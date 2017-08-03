'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const log = require('./utils/log');

function runDevServer() {
  const webpackConfig = require('../webpack.config.js');
  const compiler = webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer);
  const port = 8080;
  devServer.listen(port, () => {
    log(`WebpackDevServer is listening on ${port}... open http://localhost:${port}`);
  });
}

module.exports = {
  runDevServer
};
