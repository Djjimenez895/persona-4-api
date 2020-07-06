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

  function searchBySkillNamePrefix(query, prefix, res) {
    Skill.find(query, (err, skills) => {
      if (err) {
        return res.send(err);
      }

      const returnSkills = skills.filter((skill) => (skill.name.startsWith(prefix)))
        .map((prefixedSkill) => prefixedSkill.toJSON());
      return res.json(returnSkills);
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

  /* returns all skills that start with the given prefix in the URI
     /api/skills/name/:skillName */
  function getBySkillName(req, res) {
    const query = {};
    let name = '';

    // Players can search for skills with multiple words in the name, but
    // these skills must be entered as with '-' instead of spaces, so
    // this code replaces the '-' with ' '
    if (req.params.skillName) {
      name = req.params.skillName;
      name.replace('-', ' ');
    }

    searchBySkillNamePrefix(query, name, res);
  }

  /* returns all skills with a power >= the number given (/api/skills/power/:powerLevel URI) */
  function getByPower(req, res) {
    const requestedPowerLevel = req.params.powerLevel;

    Skill.find((err, skills) => {
      if (err) {
        return res.send(err);
      }

      const returnSkills = skills.filter((skill) => (skill.power >= requestedPowerLevel))
        .map((powerSkill) => powerSkill.toJSON());
      return res.json(returnSkills);
    });
  }

  /* Returns all skills with an accuracy >= the number given
  (/api/skills/accuracy/:accuracyLevel URI) */
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
