const express = require('express');
const itemsController = require('../controllers/itemsController');

function routes(Item) {
  const itemRouter = express.Router();
  const controller = itemsController(Item);

  // Route for getting all items or posting a new item to the database
  itemRouter.route('/items')
    .post(controller.post)
    .get(controller.get);

  // Route for getting all items of a specific type (see itemModel.js for itemTypes)
  itemRouter.route('/items/type/:itemType')
    .get(controller.getByItemType);

  // Route for finding items with a given prefix
  itemRouter.route('/items/name/:itemName')
    .get(controller.getByItemNamePrefix);

  // Route for finding items of a given price or lower
  itemRouter.route('/items/price/:itemPrice')
    .get(controller.getByItemPrice);

  // Middleware function to reduce redundancy
  // This middleware just error checks and stores the item in the request for any request
  // on the end point '/items/:itemId'
  itemRouter.use('/items/:itemId', (req, res, next) => {
    Item.findById(req.params.itemId, (err, item) => {
      if (err) {
        return res.send(err);
      }

      if (item) {
        req.item = item;
        return next();
      }

      return res.sendStatus(404);
    });
  });

  // Route for finding an item with a specific item id
  itemRouter.route('/items/:itemId')
    .get((req, res) => {
      const returnItem = req.item.toJSON();
      res.json(returnItem);
    });

  return itemRouter;
}

module.exports = routes;
