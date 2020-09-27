function personasController(Persona) {
  /* TODO: Implement a get request (/api/personas URI) that returns all personas in the database */
  function get(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/level/:startingLevel URI) that gets all personas
  that start at the given level */
  function getByStartingLevel(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/weakness/:weaknessType URI) that returns all
  personas that are weak against the given element (i.e., weak against ice) */
  function getByWeakness(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/drain/:drainType URI) that returns all 
  personas that drain the given element (i.e., drain fire) */
  function getByDrain(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/null/:nullType URI) that returns all
  personas that are immune/null to the given element (i.e., immune to electric moves) */
  function getByNullifiedType(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/repel/:repelType URI) that returns
  all personas that repel the given element */
  function getByRepelledType(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/strong/:strongType URI) that
  returns all personas that are strong against the given element */
  function getByStrongType(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/arcana/:arcanaName URI) that
  returns all the personas that are of the given arcana */
  function getByArcana(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/skill/:skillName URI) that returns
  all the personas that learn the skill with the given prefix/name */
  function getByKnownSkill(req, res) {

  }

  /* TODO: Implement a get request (/api/personas/:name URI) that returns
  all personas with the given prefix in their name */
  function getByNamePrefix(req, res) {
    let prefix = '';

    if (req.params.name) {
      prefix = req.params.name;
      prefix.replace('-', ' ');
    }

    Persona.find((err, personas) => {
      if (err) {
        return res.send(err);
      }

      const returnPersonas = personas.filter((persona) => (persona.name.startsWith(prefix)))
        .map((prefixedPersona) => prefixedPersona.toJSON());
      return res.json(returnPersonas);
    });
  }

  return {
    // eslint-disable-next-line max-len
    get, getByStartingLevel, getByWeakness, getByDrain, getByNullifiedType, getByRepelledType, getByStrongType, getByArcana, getByKnownSkill, getByNamePrefix,
  };
}

module.exports = personasController;
