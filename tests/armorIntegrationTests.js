require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'test';

const app = require('../app.js');

const Armor = mongoose.model('Armor');
const agent = request.agent(app);

describe('Armor CRUD Tests', () => {
  it('Should return all armor in the database (/armor GET) ', (done) => {
    agent.get('/api/armor')
      .expect(200)
      .end((err, results) => {
        results.body.length.should.be.above(0); // Ensure that information is given back
        done();
      });
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

  it('Should return all armor since evasion rate given is 0 (/armor/evasion/:evasionAmount GET)', (done) => {
    agent.get('/api/armor/evasion/0')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('evasion').above(-1);
        });
        done();
      });
  });

  it('Should return armor with evasion >= 12 (/armor/evasion/:evasionAmount GET)', (done) => {
    agent.get('/api/armor/evasion/12')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('evasion').above(11);
        });
        done();
      });
  });

  it('Should return zero armor pieces (evasion is too high) (/armor/evasion/:evasionAmount GET)', (done) => {
    agent.get('/api/armor/evasion/999999')
      .expect(200)
      .end((err, results) => {
        results.body.should.be.empty(); // Should be empty
        done();
      });
  });

  it('Should return all armor in the database (/armor/price/:priceAmount GET)', (done) => {
    agent.get('/api/armor/character/99999999')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('price').below(100000000);
        });
        done();
      });
  });

  it('Should return all armor that costs 13500 or less (/armor/price/:priceAmount GET)', (done) => {
    agent.get('/api/armor/character/13500')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('price').below(13501);
        });
        done();
      });
  });

  it('Should return no armor (/armor/price/:priceAmount GET)', (done) => {
    agent.get('/api/armor/character/0')
      .expect(200)
      .end((err, results) => {
        results.body.should.be.empty(); // Should be empty
        done();
      });
  });

  it('Should return armor for a specific character (/armor/character/:characterName GET)', (done) => {
    agent.get('/api/armor/character/Chie')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('characterName').equal('Chie');
        });
        done();
      });
  });

  it('Should return no armor (/armor/character/:characterName GET)', (done) => {
    agent.get('/api/armor/character/not-a-character')
      .expect(200)
      .end((err, results) => {
        results.body.should.be.empty(); // Should be empty
        done();
      });
  });

  it('Should return armor that has a name with the given prefix (/armor/:prefix GET)', (done) => {
    agent.get('/api/armor/Test') // Should return all skills in the database
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('name');
          element.name.should.startWith('Test');
        });
        done();
      });
  });

  it('Should return zero pieces of armor because none start with the given prefix (/armor/:prefix GET)', (done) => {
    agent.get('/api/armor/no-output-test') // Should return all skills in the database
      .expect(200)
      .end((err, results) => {
        results.body.should.be.empty(); // Should be empty
        done();
      });
  });
});
