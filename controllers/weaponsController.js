function weaponsController(Weapon) {
  /* TODO: Implement a get request (/api/weapons URI) that returns all weapons in the database */
  function get(req, res) {
    const query = {};

    Weapon.find(query, (err, weapons) => {
      if (err) {
        return res.send(err);
      }

      const returnWeapons = weapons.map((weapon) => {
        const newWeapon = weapon.toJSON();
        return newWeapon;
      });
      return res.json(returnWeapons);
    });
  }

  /* TODO: Implement a get request (/api/weapons/effect/:effectType URI) that returns all weapons
  that have the effect type passed as an argument (i.e., strength, luck, agility, etc.) */
  function getByEffectType(req, res) {

  }

  /* TODO: Implement a get request (/api/weapons/effect/:effecType/:amount URI) that returns
  all weapons that have the given effect type (i.e., strength, luck, etc.) and the amount
  (+1, +2. etc.) */
  function getByEffectTypeAndEffectAmount(req, res) {

  }

  /* TODO: Implement a get request (/api/weapons/price/:priceAmount URI) that returns
  all weapons that have the given price or lower */
  function getByPrice(req, res) {

  }

  /* TODO: Implement a get request ('/api/weapons/character/:characterName URI) that returns
  all weapons for a given character (i.e., all weapons for Naoto) */
  function getByCharacterName(req, res) {

  }

  /* TODO: Implement a get request (/api/weapons/attack/:attackPower URI) that returns
  all weapons with a given attack power or higher */
  function getByAttackPower(req, res) {

  }

  /* TODO: Implement a get request (/api/weapons/hit/:hitRate URI) that returns
  all weapons with a given hit rate or higher */
  function getByHitRate(req, res) {

  }

  return {
    // eslint-disable-next-line max-len
    get, getByEffectType, getByEffectTypeAndEffectAmount, getByPrice, getByCharacterName, getByAttackPower, getByHitRate,
  };
}

module.exports = weaponsController;
