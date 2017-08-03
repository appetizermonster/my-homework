'use strict';

module.exports = IS_DEV_MODE ? require('./dev.json') : require('./prod.json');
