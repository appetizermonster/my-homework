'use strict';

const isTestMode = (process.env.NODE_ENV === 'test');
const config = isTestMode ? require('./test.json') : require('./default.json');

module.exports = config;
