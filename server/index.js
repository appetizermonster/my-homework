'use strict';

const app = require('./app');
const webpackHelper = require('./webpack-helper');
const log = require('./utils/log');

const isDevMode = (process.env.NODE_ENV === 'development');

if (isDevMode)
  webpackHelper.runDevServer();

const PORT = 3000;
app.listen(PORT, () => {
  log(`api server is listening on port ${PORT}...`);

  const endUserPort = isDevMode ? webpackHelper.LISTEN_PORT : PORT;
  log(`open http://localhost:${endUserPort}`);
});
