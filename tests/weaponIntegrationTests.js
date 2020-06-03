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

  it('Should return weapons related to the given character (/weapons/character/:characterName GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return weapons with the given effect type (i.e., strength) (/weapons/effect/:effectType GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return weapons with an attack >= the attack power given (/weapons/attack/:attackPower GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return weapons with a hit rate >= the hit rate given (/weapons/hit/:hitRate GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });
});
