'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const log = require('./utils/log');
const apiRouter = require('./api-router');
const apiService = require('./api-service');

const app = express();
const isTestMode = (process.env.NODE_ENV === 'test');
const isDevMode = (process.env.NODE_ENV === 'development');

if (isTestMode)
  log.disableLogging();

if (isDevMode) {
  const cors = require('cors');
  app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'PUT'],
    credentials: true
  }));
}

app.use(session({
  secret: 'this is secret',
  saveUninitialized: false,
  resave: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', apiRouter);

apiService.initialize().catch(console.error);

module.exports = app;
