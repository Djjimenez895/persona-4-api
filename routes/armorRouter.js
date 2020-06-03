const express = require('express');
const armorController = require('../controllers/armorController');

function routes(Armor) {
  const armorRouter = express.Router();
  const controller = armorController(Armor);

  armorRouter.route('/armor')
    .get(controller.get)
    .post(controller.post);

  armorRouter.route('/armor/effect/:effectType/:amount')
    .get(controller.getByEffectTypeAndAmount);

  armorRouter.route('/armor/effect/:effectType')
    .get(controller.getByEffectType);

  armorRouter.route('/armor/defense/:defenseAmount')
    .get(controller.getByDefense);

  armorRouter.route('/armor/evasion/:evasionAmount')
    .get(controller.getByEvasion);

  armorRouter.route('/armor/price/:priceAmount')
    .get(controller.getByPrice);

  armorRouter.route('/armor/character/:characterName')
    .get(controller.getByCharacterName);

  armorRouter.route('/armor/:prefix')
    .get(controller.getByArmorPrefix);

  return armorRouter;
}

module.exports = routes;
