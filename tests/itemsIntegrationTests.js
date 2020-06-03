require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'test';

const app = require('../app.js');

const Item = mongoose.model('Item');
const agent = request.agent(app);

describe('Item CRUD Tests', () => {
  it('Should return all items in the test database (/items GET)', (done) => {
    agent.get('/api/items')
      .expect(200)
      .end((err, results) => {
        results.body.length.should.be.above(0); // Ensure that information is given back
        done();
      });
  });

  it('Should return the item with the ObjectId: 5ec77eee7797e9091bb5812e (/items/:itemId GET)', (done) => {
    agent.get('/api/items/5ec77eee7797e9091bb5812e')
      .expect(200)
      .end((err, results) => {
        results.body.should.have.property('_id').equal('5ec77eee7797e9091bb5812e');
        done();
      });
  });

  it('Should return items that have the given prefix in their name (/items/name/:itemName GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all items with a price <= the price provided (/items/price/:itemPrice GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all items with the type hp (/items/type/:itemType GET)', (done) => {
    agent.get('/api/items/type/hp')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('itemType').equal('hp');
        });
        done();
      });
  });

  it('Should return all items with the type sp (/items/type/:itemType GET)', (done) => {
    agent.get('/api/items/type/sp')
      .expect(200)
      .end((err, results) => {
        results.body.forEach((element) => {
          element.should.have.property('itemType').equal('sp');
        });
        done();
      });
  });

  it('Should return all items with the type status (/items/type/:itemType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all items with the type key (/items/type/:itemType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all items with the type damage (/items/type/:itemType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  it('Should return all items with the type misc (/items/type/:itemType GET)', (done) => {
    throw new Error('Must be implemented');
  });

  after((done) => { // run once all the tests are complete
    mongoose.connection.close();
    app.server.close(done());
  });
});
