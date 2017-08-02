'use strict';

function toMessage(obj) {
  if (obj === undefined)
    return 'undefined';
  if (obj === null)
    return 'null';
  if (obj.constructor === Array || obj.constructor === Object)
    return JSON.stringify(obj);
  return obj.toString();
}

module.exports = (obj) => {
  const msg = toMessage(obj);
  console.log(`[${new Date().toISOString()}] ${msg}`);
};
