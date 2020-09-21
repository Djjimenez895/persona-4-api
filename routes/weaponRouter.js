const express = require('express');
const weaponsController = require('../controllers/weaponsController');

function routes(Weapon) {
  const weaponRouter = express.Router();
  const controller = weaponsController(Weapon);

  weaponRouter.route('/weapons')
    .get(controller.get);

  // Check if you can ping this
  weaponRouter.route('/weapons/effect/:effectType/:amount')
    .get(controller.getByEffectTypeAndEffectAmount);

  weaponRouter.route('/weapons/price/:priceAmount')
    .get(controller.getByPrice);

  weaponRouter.route('/weapons/character/:characterName')
    .get(controller.getByCharacterName);

  // Check if this works with the end above
  weaponRouter.route('/weapons/effect/:effectType')
    .get(controller.getByEffectType);

  weaponRouter.route('/weapons/attack/:attackPower')
    .get(controller.getByAttackPower);

  weaponRouter.route('/weapons/hit/:hitRate')
    .get(controller.getByHitRate);

  return weaponRouter;
}

module.exports = routes;
