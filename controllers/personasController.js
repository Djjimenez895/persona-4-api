function personasController(Persona) {
  function searchByQuery(query, res) {
    Persona.find(query, (err, items) => {
      if (err) {
        return res.send(err);
      }
      const returnItems = items.map((item) => {
        const newItem = item.toJSON();
        return newItem;
      });
      return res.json(returnItems);
    });
  }

  /* Get all the personas in the database */
  function get(req, res) {
    const query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }

    searchByQuery(query, res);
  }

  /*  Returns all personas that start at the given
      level or lower (/api/personas/level/:startingLevel URI) */
  function getByStartingLevel(req, res) {
    const requestedStartingLevel = req.params.startingLevel;

    Persona.find((err, personasWithRequestedStartingLevel) => {
      if (err) {
        return res.send(err);
      }

      // eslint-disable-next-line max-len
      const returnPersonas = personasWithRequestedStartingLevel.filter((persona) => (persona.level <= requestedStartingLevel))
        .map((personaWithRequestedStartingLevel) => personaWithRequestedStartingLevel.toJSON());
      return res.json(returnPersonas);
    });
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

  /* Returns all the personas that are of the given arcana (/api/personas/arcana/:arcanaName URI) */
  function getByArcana(req, res) {
    const requestedArcana = req.params.arcanaName;

    Persona.find((err, personasWithRequestedArcana) => {
      if (err) {
        return res.send(err);
      }

      // eslint-disable-next-line max-len
      const returnPersonas = personasWithRequestedArcana.filter((persona) => (persona.arcana === requestedArcana))
        .map((personaWithRequestedArcana) => personaWithRequestedArcana.toJSON());
      return res.json(returnPersonas);
    });
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
