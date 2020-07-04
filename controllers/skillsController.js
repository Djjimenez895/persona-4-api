function skillsController(Skill) {
  /*
  Uses .find to search the database given a query
  Helps reduce code redundancy
  */
  function searchByQuery(query, res) {
    Skill.find(query, (err, items) => {
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

  /*
    Get request (/api/skills URI) that returns all
    skills in the database
  */
  function get(req, res) {
    const query = {};

    Skill.find(query, (err, skills) => {
      if (err) {
        return res.send(err);
      }
      const returnSkills = skills.map((skill) => {
        const newSkill = skill.toJSON();
        return newSkill;
      });
      return res.json(returnSkills);
    });
  }

  function getByResourceCostType(req, res) {
    const query = {};

    // This checks the parameter in the URI to determine the type of object you want to return
    if (req.params.resourceCostType) {
      query.resourceCostType = req.params.resourceCostType;
    }

    searchByQuery(query, res);
  }

  /* Returns all skills of the given type passed in the request parameters (i.e., all ice moves)
     This function is used for the end point (/api/skills/type/:skillType URI)
  */
  function getBySkillType(req, res) {
    const requestedSkillType = req.params.skillType;

    Skill.find((err, skills) => {
      if (err) {
        return res.send(err);
      }

      // eslint-disable-next-line max-len
      const returnSkills = skills.filter((skill) => (skill.skillType === requestedSkillType))
        .map((requestedSkill) => requestedSkill.toJSON());
      return res.json(returnSkills);
    });
  }

  /* TODO: Implement a get request (/api/skills/name/:skillName URI) that
  returns all skills that start with the given prefix */
  function getBySkillName(req, res) {

  }

  /* TODO: Implement a get request (/api/skills/power/:powerLevel URI) that
  returns all items with a power >= the number given */
  function getByPower(req, res) {

  }

  /* TODO: Implement a get request (/api/skills/accuracy/:accuracyLevel URI)
  that returns all items with an accuracy >= the number given */
  function getByAccuracy(req, res) {
    const requestedAccuracy = req.params.accuracyLevel;

    Skill.find((err, skills) => {
      if (err) {
        return res.send(err);
      }

      const returnSkills = skills.filter((skill) => (skill.accuracy >= requestedAccuracy))
        .map((accurateSkill) => accurateSkill.toJSON());
      return res.json(returnSkills);
    });
  }

  /* This function finds all skills with a critical chance >= the number given
     in the request params. This function is used for the URI /api/skills/critical/:criticalChance.
  */
  function getByCriticalChance(req, res) {
    const critChance = req.params.criticalChance;

    Skill.find((err, skills) => {
      if (err) {
        return res.send(err);
      }

      const returnSkills = skills.filter((skill) => (skill.criticalChance >= critChance))
        .map((critItem) => critItem.toJSON());
      return res.json(returnSkills);
    });
  }

  return {
    // eslint-disable-next-line max-len
    get, getBySkillType, getBySkillName, getByPower, getByAccuracy, getByCriticalChance, getByResourceCostType,
  };
}

module.exports = skillsController;
