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

  /* TODO: Implement a get request (/api/skills/type/:skillType URI) that
  returns all skills of the given type (i.e., all ice moves) */
  function getBySkillType(req, res) {

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

  }

  /* TODO: Implement a get request (/api/skills/critical/:criticalChance URI) that returns
  all items with a critical chance >= the number given. */
  function getByCriticalChance(req, res) {

  }

  return {
    // eslint-disable-next-line max-len
    get, getBySkillType, getBySkillName, getByPower, getByAccuracy, getByCriticalChance, getByResourceCostType,
  };
}

module.exports = skillsController;
