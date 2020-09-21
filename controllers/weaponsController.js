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

  /* Returns all weapons that have the effect type
  passed as an argument (i.e., strength, luck, agility, etc.)
  to the end point (/api/weapons/effect/:effectType URI) */
  function getByEffectType(req, res) {
    const requestedEffectType = req.params.effectType;

    Weapon.find((err, weaponsWithRequestedEffectType) => {
      if (err) {
        return res.send(err);
      }

      // eslint-disable-next-line max-len
      const returnWeapons = weaponsWithRequestedEffectType.filter((weapon) => (weapon.effectType === requestedEffectType))
        .map((weaponWithRequestedEffectType) => weaponWithRequestedEffectType.toJSON());
      return res.json(returnWeapons);
    });
  }

  /* TODO: Implement a get request (/api/weapons/effect/:effectType/:amount URI) that returns
  all weapons that have the given effect type (i.e., strength, luck, etc.) and the amount
  (+1, +2. etc.) */
  function getByEffectTypeAndEffectAmount(req, res) {
    const requestedEffectType = req.params.effectType;
    const requestedEffectAmount = req.params.amount;

    Weapon.find((err, weaponsWithRequestedEffectTypeAndAmount) => {
      if (err) {
        return res.send(err);
      }

      // eslint-disable-next-line max-len
      const returnWeaponsWithEffectType = weaponsWithRequestedEffectTypeAndAmount.filter((weapon) => (weapon.effectType === requestedEffectType));
      // eslint-disable-next-line max-len
      const returnWeaponsWithEffectTypeAndAmount = returnWeaponsWithEffectType.filter((filteredWeapon) => (filteredWeapon.effectAmount <= requestedEffectAmount))
      // eslint-disable-next-line max-len
        .map((weaponWithRequestedEffectTypeAndAmount) => weaponWithRequestedEffectTypeAndAmount.toJSON());
      return res.json(returnWeaponsWithEffectTypeAndAmount);
    });
  }

  /* Returns all weapons that have the given price or lower (/api/weapons/price/:priceAmount URI) */
  function getByPrice(req, res) {
    const requestedWeaponPrice = req.params.priceAmount;

    Weapon.find((err, weaponsWithRequestedPrice) => {
      if (err) {
        return res.send(err);
      }

      // eslint-disable-next-line max-len
      const returnWeapons = weaponsWithRequestedPrice.filter((weapon) => (weapon.price <= requestedWeaponPrice))
        .map((weaponForRequestedPrice) => weaponForRequestedPrice.toJSON());
      return res.json(returnWeapons);
    });
  }

  /* Returns all weapons for a given character ('/api/weapons/character/:characterName URI) */
  function getByCharacterName(req, res) {
    const requestedCharacterName = req.params.characterName;

    Weapon.find((err, weaponsForRequestedCharacter) => {
      if (err) {
        return res.send(err);
      }

      // eslint-disable-next-line max-len
      const returnWeapons = weaponsForRequestedCharacter.filter((weapon) => (weapon.character === requestedCharacterName))
        .map((weaponForRequestedCharacter) => weaponForRequestedCharacter.toJSON());
      return res.json(returnWeapons);
    });
  }

  // date and time | log level | message

  /* Returns all weapons with a given attack power or higher
  (/api/weapons/attack/:attackPower URI) */
  function getByAttackPower(req, res) {
    const requestedAttackPower = req.params.attackPower;

    Weapon.find((err, weaponsWithAttackPower) => {
      if (err) {
        return res.send(err);
      }

      // eslint-disable-next-line max-len
      const returnWeapons = weaponsWithAttackPower.filter((weapon) => (weapon.attack >= requestedAttackPower))
        .map((weaponWithAttackPower) => weaponWithAttackPower.toJSON());
      return res.json(returnWeapons);
    });
  }

  /* Returns all weapons with a given hit rate or higher (/api/weapons/hit/:hitRate URI) */
  function getByHitRate(req, res) {
    const requestedHitRate = req.params.hitRate;

    Weapon.find((err, weaponsWithHitRate) => {
      if (err) {
        return res.send(err);
      }

      const returnWeapons = weaponsWithHitRate.filter((weapon) => (weapon.hit >= requestedHitRate))
        .map((weaponWithHitRate) => weaponWithHitRate.toJSON());
      return res.json(returnWeapons);
    });
  }

  return {
    // eslint-disable-next-line max-len
    get, getByEffectType, getByEffectTypeAndEffectAmount, getByPrice, getByCharacterName, getByAttackPower, getByHitRate,
  };
}

module.exports = weaponsController;
