
function skillsController(Skill) {
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

  /* TODO: Implement a post request (/api/skills URI) that adds a skill to the database */
  function post(req, res) {

  }

  /* TODO: Implement a get request (/api/skills/cost/hp URI) that returns
  all skills that cost hp */
  function getByResourceCostTypeHp(req, res) {

  }

  /* TODO: Implement a get request (/api/skills/cost/sp URI) that returns
  all skills that cost sp */
  function getByResourceCostTypeSp(req, res) {

  }

  /* TODO: Implement a get request (/api/skills/type/:skillType URI) that
  returns all skills of the given type (i.e., all ice move) */
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
    get, post, getByResourceCostTypeHp, getByResourceCostTypeSp, getBySkillType, getBySkillName, getByPower, getByAccuracy, getByCriticalChance,
  };
}

module.exports = skillsController;
