'use strict';

// Set test mode
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../server/app');

describe('Basic API', () => {
  it('should return defaults on first time', async () => {
    const res = await chai.request(app).get('/api').send();
    expect(res).to.have.status(200);
    expect(res).to.be.json;
  });

  it('should be failed to save data if not logged in', async () => {
    const data = {
      language: 'jp',
      timezone: 'kst',
      currency: 'jpy',
      profileOption: 'me',
      messageOption: 'none',
      categoryListOption: 'off'
    };

    const res = await chai.request(app).put('/api').send(data);
    expect(res).to.have.status(200);
    expect(res.body).to.include({ success: false });
  });

  it('should save data successfully after logged in', async () => {
    const data = {
      language: 'jp',
      timezone: 'kst',
      currency: 'jpy',
      profileOption: 'me',
      messageOption: 'none',
      categoryListOption: 'off'
    };
    const agent = chai.request.agent(app);

    // Login
    const res_log = await agent.get('/api').send();
    expect(res_log).to.have.status(200);

    // Saving
    const res_put = await agent.put('/api').send(data);
    expect(res_put).to.have.status(200);
    expect(res_put.body).to.include({ success: true });
  });

  it('should return saved data after saving', async () => {
    const data = {
      language: 'kr',
      timezone: 'kst',
      currency: 'usd',
      profileOption: 'me',
      messageOption: 'none',
      categoryListOption: 'off'
    };
    const agent = chai.request.agent(app);

    // Login
    const res_log = await agent.get('/api').send();
    expect(res_log).to.have.status(200);

    // Saving
    const res_put = await agent.put('/api').send(data);
    expect(res_put).to.have.status(200);

    // Retrieving
    const res_get = await agent.get('/api').send();
    expect(res_get).to.have.status(200);
    expect(res_get.body).to.deep.equal(data);
  });
});
