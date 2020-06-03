require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'test';

const app = require('../app.js');

const Accessory = mongoose.model('Accessory');
const agent = request.agent(app);

describe('Accessory CRUD Tests', () => {
  it('Should return all accessories in the test database (/accessories GET request)', (done) => {
    agent.get('/api/accessories')
      .expect(200)
      .end((err, results) => {
        results.body.length.should.be.above(0);
        done();
      });
  });

  it('Should return accessories that have the given effect and the specified amount (/accessories/effect/:effectType/:amount GET)', (done) => {

  });

  it('Should return accessories that have the given effect type (/accessories/effect/:effectType GET)', (done) => {

  });

  it('Should return accessories that have a price <= the price given', (done) => {

  });

  it('Should return acceossires that start with the given prefix', (done) => {

  });
});
