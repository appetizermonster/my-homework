'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const memory = {
  language: 'kr',
  timezone: 'kst',
  currency: 'krw',
  profileOption: 'all',
  messageOption: 'all',
  categoryListOption: 'off'
};

app.use(cors());
app.use(bodyParser.json());

app.get('/pref', (req, res) => {
  res.json(memory);
});

app.put('/pref', (req, res) => {
  const body = req.body;
  for (const key in body) {
    if (memory.hasOwnProperty(key))
      memory[key] = body[key];
  }
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('server is listening...');
});
