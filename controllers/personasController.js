function personasController(Persona) {
  /* TODO: Implement a get request (/personas URI) that returns all personas in the database */
  function get(req, res) {

  }

  /* TODO: Implement a post request (/personas URI) that adds a new persona to the database */
  function post(req, res) {

  }

  /* TODO: Implement a get request (/personas/level/:startingLevel URI) that gets all personas
  that start at the given level */
  function getByStartingLevel(req, res) {

  }

  /* TODO: Implement a get request (/personas/weakness/:weaknessType URI) that returns all
  personas that are weak against the given element (i.e., weak against ice) */
  function getByWeakness(req, res) {

  }

  /* TODO: Implement a get request (/personas/drain/:drainType URI) that returns all 
  personas that drain the given element (i.e., drain fire) */
  function getByDrain(req, res) {

  }

  /* TODO: Implement a get request (/personas/null/:nullType URI) that returns all
  personas that are immune/null to the given element (i.e., immune to electrin) */
  function getByNullifiedType(req, res) {

  }

  /* TODO: Implement a get request (/personas/repel/:repelType URI) that returns
  all personas that repel the given element */
  function getByRepelledType(req, res) {

  }

  /* TODO: Implement a get request (/personas/strong/:strongType URI) that
  returns all personas that are strong against the given element */
  function getByStrongType(req, res) {

  }

  /* TODO: Imeplement a get request (/personas/arcana/:arcanaName URI) that
  returns all the personas that are of the given arcana */
  function getByArcana(req, res) {

  }

  /* TODO: Implement a get request (/personas/skill/:skillName URI) that returns
  all the skills a persona can learn or knows by default */
  function getByKnownSkill(req, res) {

  }

  /* TODO: Implement a get request (/personas/:name URI) that returns
  all personas with the given prefix in their name */
  function getByNamePrefix(req, res) {

  }

  return {
    // eslint-disable-next-line max-len
    get, post, getByStartingLevel, getByWeakness, getByDrain, getByNullifiedType, getByRepelledType, getByStrongType, getByArcana, getByKnownSkill, getByNamePrefix,
  };
}

module.exports = personasController;
