'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const uuid = require('uuid/v4');

const wrap = require('./utils/async-wrapper');
const log = require('./utils/log');

const app = express();
const service = require('./service');

function getDefaultUserPref() {
  return {
    language: 'kr',
    timezone: 'kst',
    currency: 'krw',
    profileOption: 'all',
    messageOption: 'all',
    categoryListOption: 'off'
  };
}

app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET', 'PUT'],
  credentials: true
}));
app.use(session({
  secret: 'this is secret',
  saveUninitialized: false,
  resave: false
}));
app.use(bodyParser.json());

app.get('/pref', wrap(async (req, res) => {
  const session = req.session;
  const userId = session.userId;
  let userPref = getDefaultUserPref();
  if (userId) {
    log(`fetching data for user ${userId}`);
    userPref = await service.getPref(userId);
  } else {
    const newUserId = uuid();
    log(`creating new user ${newUserId}`);
    session.userId = newUserId;
  }
  res.json(userPref);
}));

app.put('/pref', wrap(async (req, res) => {
  let success = false;
  const userId = req.session.userId;
  if (userId) {
    log(`saving data for user ${userId}`);
    success = await service.setPref(userId, req.body);
    log(`saved data for user ${userId}, result: ${success}`);
  }
  res.json({ success });
}));

app.listen(3000, () => {
  log('server is listening...');
});
