const express = require('express');
const accessoriesController = require('../controllers/accessoriesController');

function routes(Accessory) {
  const accessoryRouter = express.Router();
  const controller = accessoriesController(Accessory);

  accessoryRouter.route('/accessories')
    .get(controller.get)
    .post(controller.post);

  // Make sure you can ping this end point
  accessoryRouter.route('/accessories/effect/:effectType/:amount')
    .get(controller.getByEffectTypeAndAmount);

  accessoryRouter.route('/accessories/effect/:effectType')
    .get(controller.getByEffectType);

  accessoryRouter.route('/accessories/price/:amount')
    .get(controller.getByPrice);

  accessoryRouter.route('/accessories/:prefix')
    .get(controller.getByAccessoryPrefix);

  return accessoryRouter;
}

module.exports = routes;
