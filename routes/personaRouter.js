const express = require('express');
const personasController = require('../controllers/personasController');

function routes(Persona) {
  const personaRouter = express.Router();
  const controller = personasController(Persona);

  personaRouter.route('/personas')
    .get(controller.get)
    .post(controller.post);

  personaRouter.route('/personas/level/:startingLevel')
    .get(controller.getByStartingLevel);

  personaRouter.route('/personas/weakness/:weaknessType')
    .get(controller.getByWeakness);

  personaRouter.route('/personas/drain/:drainType')
    .get(controller.getByDrain);

  personaRouter.route('/personas/null/:nullType')
    .get(controller.getByNullifiedType);

  personaRouter.route('/personas/repel/:repelType')
    .get(controller.getByRepelledType);

  personaRouter.route('/personas/strong/:strongType')
    .get(controller.getByStrongType);

  personaRouter.route('/personas/arcana/:arcanaName')
    .get(controller.getByArcana);

  personaRouter.route('/personas/skill/:skillName')
    .get(controller.getByKnownSkill);

  personaRouter.route('/personas/:name')
    .get(controller.getByNamePrefix);

  return personaRouter;
}

module.exports = routes;
