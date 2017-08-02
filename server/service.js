'use strict';

const memory = {
  language: 'kr',
  timezone: 'kst',
  currency: 'krw',
  profileOption: 'all',
  messageOption: 'all',
  categoryListOption: 'off'
};

async function getPref(userId) {
  return memory;
}

async function setPref(userId, data) {
  for (const key in data) {
    memory[key] = data[key];
  }
  return true;
}

module.exports = {
  getPref,
  setPref
};
