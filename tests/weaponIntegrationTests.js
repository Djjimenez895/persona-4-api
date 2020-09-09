require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'test';

const app = require('../app.js');

const Weapon = mongoose.model('Weapon');
const agent = request.agent(app);

describe('Weapon CRUD Tests', () => {
  it('Should return all weapons in the database (/weapons GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return weapons (/weapons/effect/:effecType/:amount GET) that have the specified effect type and the given amount (i.e., +2 strength)', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return weapons (/weapons/price/:priceAmount GET) that have a price <= the one given ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return weapons related to the given character (/api/weapons/character/:characterName GET) ', (done) => {
    agent.get('/api/weapons/character/chie')
      .expect(200)
      .end((err, results) => {
        results.body.should.not.be.empty();
        results.body.forEach((element) => {
          element.should.have.property('character').equal('chie');
        });
        done();
      });
  });

  it('Should return weapons with the given effect type (i.e., strength) (/weapons/effect/:effectType GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return zero weapons because the attack value given is 9999999 (/api/weapons/attack/:attackPower GET) ', (done) => {
    agent.get('/api/weapons/attack/9999999')
      .expect(200)
      .end((err, results) => {
        results.body.should.be.empty();
        done();
      });
  });

  it('Should return weapons with an attack >= the attack power given (/api/weapons/attack/:attackPower GET) ', (done) => {
    agent.get('/api/weapons/attack/1')
      .expect(200)
      .end((err, results) => {
        results.body.should.not.be.empty();
        results.body.forEach((element) => {
          element.should.have.property('attack').above(1);
        });
        done();
      });
  });

  it('Should return weapons with a hit rate >= the hit rate given (/api/weapons/hit/:hitRate GET) ', (done) => {
    agent.get('/api/weapons/hit/95')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('hit').above(94);
        });
        done();
      });
  });

  it('Should return no weapons because the hit rate is 120 (/api/weapons/hit/:hitRate GET) ', (done) => {
    agent.get('/api/weapons/hit/120')
      .expect(200)
      .end((err, results) => {
        results.body.should.be.empty();
        done();
      });
  });
});
