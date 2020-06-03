const should = require('should');
const sinon = require('sinon');

const itemsController = require('../controllers/itemsController');

describe('Item Controller Tests: ', () => {
  describe('Post', () => {
    it('Should not allow an empty name when posting to the db', () => {
      const Item = function (item) { this.save = () => {}}; // A mock item object

      const req = {
        body: {
          description: 'Testing description',
          purchasePrice: '100 yen',
          sellPrice: '50 yen',
        },
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = itemsController(Item);
      controller.post(req, res);
      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('All fields are required').should.equal(true);
    });
  });
});
