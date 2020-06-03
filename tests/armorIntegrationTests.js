require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'test';

const app = require('../app.js');

const Armor = mongoose.model('Armor');
const agent = request.agent(app);

describe('Armor CRUD Tests', () => {
  it('Should return all armor in the database (/armor GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return armor with the given effect type and the give amount (/armor/effect/:effectType/:amount (GET)', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return armor with the given effect type (/armor/effect/:effectType GET)', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return armor with defense >= the amount given (/armor/defense/:defenseAmount GET)', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return armor with evasion >= the amount given (/armor/evasion/:evasionAmount GET)', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return armor with a price <= the price given (/armor/price/:priceAmount GET)', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return armor for a specific character (/armor/character/:characterName GET)', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return armor that has a name with the given prefix (/armor/:prefix GET)', (done) => {
    throw new Error('Needs to be implemented');
  });
});
