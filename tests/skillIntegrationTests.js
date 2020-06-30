require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'test';

const app = require('../app.js');

const Skill = mongoose.model('Skill');
const agent = request.agent(app);

describe('Skill CRUD Tests', () => {
  it('Should return all skills in the database (/api/skills GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return skills that cost mp (/api/skills/cost/mp GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return skills that cost hp (/api/skills/cost/hp GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return skills that cost hp (/api/skills/type/:skillType GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return skills with the given prefix in their skill name (/api/skills/name/:skillName GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return skills that have a power >= the given power level (/api/skills/power/:powerLevel GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return skills with an accuracy >= the one given (/api/skills/accuracy/:accuracyLevel GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return skills with a critical chance >= the one given (/api/skills/critical/:criticalChance GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });
});
