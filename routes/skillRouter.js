const express = require('express');
const skillsController = require('../controllers/skillsController');

function routes(Skill) {
  const skillRouter = express.Router();
  const controller = skillsController(Skill);

  skillRouter.route('/skills')
    .get(controller.get);

  skillRouter.route('/skills/cost/:resourceCostType')
    .get(controller.getByResourceCostType);

  skillRouter.route('/skills/type/:skillType')
    .get(controller.getBySkillType);

  skillRouter.route('/skills/name/:skillName')
    .get(controller.getBySkillName);

  skillRouter.route('/skills/power/:powerLevel')
    .get(controller.getByPower);

  skillRouter.route('/skills/accuracy/:accuracyLevel')
    .get(controller.getByAccuracy);

  skillRouter.route('/skills/critical/:criticalChance')
    .get(controller.getByCriticalChance);

  return skillRouter;
}

module.exports = routes;
