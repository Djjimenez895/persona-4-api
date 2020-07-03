require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'test';

const app = require('../app.js');

const Skill = mongoose.model('Skill');
const agent = request.agent(app);

describe('Skill CRUD Tests', () => {
  it('Should return all skills in the database (/api/skills GET) ', (done) => {
    agent.get('/api/skills')
      .expect(200)
      .end((err, results) => {
        results.body.length.should.be.above(0); // Should get something back
        done();
      });
  });

  it('Should return skills that cost mp (/api/skills/cost/:resourceCostType GET) ', (done) => {
    throw new Error('Needs to be implemented');
  });

  it('Should return all wind skills (/api/skills/type/:skillType GET) ', (done) => {
    agent.get('/api/skills/type/wind')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('skillType').equal('wind');
        });
        done();
      });
  });

  it('Should return all electric skills (/api/skills/type/:skillType GET) ', (done) => {
    agent.get('/api/skills/type/electric')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('skillType').equal('electric');
        });
        done();
      });
  });

  it('Should return zero skills (/api/skills/type/:skillType GET) ', (done) => {
    agent.get('/api/skills/type/test-for-no-skill-output')
      .expect(200)
      .end((err, results) => {
        results.body.should.be.empty(); // Should be empty
        done();
      });
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

  it('Should return all skills in the database (/api/skills/critical/:criticalChance GET) ', (done) => {
    agent.get('/api/skills/critical/0') // Should return all skills in the database
      .expect(200)
      .end((err, results) => {
        results.body.length.should.be.above(0); // Should get something back
        done();
      });
  });

  it('Should return skills with a critical chance >= 10 (/api/skills/critical/:criticalChance GET) ', (done) => {
    agent.get('/api/skills/critical/10')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('criticalChance').above(9);
        });
        done();
      });
  });

  it('Should return an empty array (/api/skills/critical/:criticalChance GET) ', (done) => {
    agent.get('/api/skills/critical/returnEmpty')
      .expect(200)
      .end((err, results) => {
        results.body.should.be.empty(); // Should be empty
        done();
      });
  });
});
