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

  if (!isDevMode)
    log(`open http://localhost:${PORT}`);
});
