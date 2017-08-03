'use strict';

const app = require('./app');
const webpackHelper = require('./webpack-helper');
const log = require('./utils/log');

const isDevMode = (process.env.NODE_ENV === 'development');

if (isDevMode)
  webpackHelper.runDevServer();

const port = 3000;
app.listen(port, () => {
  log(`api server is listening on port ${port}...`);
});
