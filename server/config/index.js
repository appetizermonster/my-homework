'use strict';

let config = require('./default.json');

if (process.env.NODE_ENV === 'test')
  config = require('./test.json');

module.exports = config;
