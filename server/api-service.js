'use strict';

const MongoClient = require('mongodb').MongoClient;
const config = require('./config');
const log = require('./utils/log');

let db = null;
let collection = null;

async function initialize() {
  const dbUrl = config.db;
  log(`connecting to mongodb ${dbUrl}`);
  try {
    db = await MongoClient.connect(dbUrl);
    collection = db.collection('prefs');
    log('connected to db');
  } catch (e) {
    log(e);
  }
}

function getDefaultPref() {
  return {
    language: 'kr',
    timezone: 'kst',
    currency: 'krw',
    profileOption: 'all',
    messageOption: 'all',
    categoryListOption: 'off'
  };
}

async function getPref(userId) {
  const pref = await collection.findOne({ userId });
  if (pref === null)
    return getDefaultPref();
  return pref.data;
}

async function setPref(userId, data) {
  const res = await collection.update(
    { userId },
    { userId, data },
    { upsert: true }
  );
  const success = (res.result.n === 1);
  return success;
}

module.exports = {
  initialize,
  getDefaultPref,
  getPref,
  setPref
};
