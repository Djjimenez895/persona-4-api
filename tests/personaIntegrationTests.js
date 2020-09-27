require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'test';

const app = require('../app.js');

const Persona = mongoose.model('Persona');
const agent = request.agent(app);

describe('Persona CRUD Tests', () => {
  it('Should return all personas in the database (/personas GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should successfully add a new Persona to the database (POST Request)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should get all Personas that start at the given starting level (/api/personas/level/:startingLevel GET)', (done) => {
    agent.get('/api/personas/level/12')
      .expect(200)
      .end((err, results) => {
        results.body.should.not.be.empty();
        results.body.forEach((element) => {
          element.should.have.property('level').equal(12);
        });
        done();
      });
  });

  it('Should return all personas with the given weakness (/personas/weakness/:weaknessType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all personas with that drain the given type (/personas/drain/:drainType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all personas that nullify the given type (/personas/null/:nullType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all personas that repel the given type (/personas/repel/:repelType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all personas that are strong against the given type (/personas/strong/:strongType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all personas of the given Arcana (/personas/arcana/:arcanaName GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all personas that can learn the skill with the given name (/personas/skill/:skillName GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all personas that have the given prefix in their name (/api/personas/:name GET)', (done) => {
    agent.get('/api/personas/Test')
      .expect(200)
      .end((err, results) => {
        results.body.should.not.be.empty();
        results.body.forEach((element) => {
          element.should.have.property('name');
          element.name.should.startWith('Test');
        });
        done();
      });
  });
});
