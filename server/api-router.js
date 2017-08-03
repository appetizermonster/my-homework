'use strict';

const express = require('express');
const uuid = require('uuid/v4');
const wrap = require('./utils/async-wrapper');
const log = require('./utils/log');
const apiService = require('./api-service');

const router = express.Router();

apiService.initialize().catch(console.error);

router.get('/', wrap(async (req, res) => {
  const session = req.session;
  const userId = session.userId;
  let userPref = null;
  if (userId) {
    log(`fetching data for user ${userId}`);
    userPref = await apiService.getPref(userId);
  } else {
    const newUserId = uuid();
    log(`creating new user ${newUserId}`);
    session.userId = newUserId;
    userPref = apiService.getDefaultPref();
  }
  res.json(userPref);
}));

router.put('/', wrap(async (req, res) => {
  let success = false;
  const userId = req.session.userId;
  if (userId) {
    log(`saving data for user ${userId}`);
    success = await apiService.setPref(userId, req.body);
    log(`saved data for user ${userId}, result: ${success}`);
  }
  res.json({ success });
}));

module.exports = router;
