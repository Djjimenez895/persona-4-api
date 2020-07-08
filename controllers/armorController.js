const itemModel = require("../models/itemModel");

function armorController(Armor) {
  /*
    Uses .find to search the DB given a query.
    This helps reduce code redundancy.
  */
  function searchByQuery(query, res) {
    Armor.find(query, (err, armorPieces) => {
      if (err) {
        return res.send(err);
      }

      const returnArmor = armorPieces.map((armor) => {
        const newArmor = armor.toJSON();
        return newArmor;
      });
      return res.json(returnArmor);
    });
  }

  /* TODO: Implement a get request (/api/armor URI) that returns all
  armor in the database */
  function get(req, res) {
    const query = {};
    searchByQuery(query, res);
  }

  /* TODO: Implement a get request (/api/armor/effect/:effectType/:amount URI)
  that gets all armor with a specific effect type and a specific amount
  for that effect type */
  function getByEffectTypeAndAmount(req, res) {

  }

  /* TOOD: Implemenet a get request (/api/armor/effect/:effectType URI) that
  returns all armor with a specific effect type (i.e., strength, luck, etc.) */
  function getByEffectType(req, res) {

  }

  /* Returns all armor with defense >= the amount of defense given
     as an argument to the URI /api/armor/defense/:defenseAmount
  */
  function getByDefense(req, res) {
    const requestedDefense = req.params.defenseAmount;

    Armor.find((err, armorPieces) => {
      if (err) {
        return res.send(err);
      }

      const returnArmor = armorPieces.filter((armor) => (armor.defense >= requestedDefense))
        .map((defenseArmor) => defenseArmor.toJSON());
      return res.json(returnArmor);
    });
  }

  /* Returns all armor with an evasion rating >= the amount given
     (/api/armor/evasion/:evasionAmount URI) */
  function getByEvasion(req, res) {
    const requestEvasionRate = req.params.evasionAmount;

    Armor.find((err, armorPieces) => {
      if (err) {
        return res.send(err);
      }

      const returnArmor = armorPieces.filter((armor) => (armor.evasion >= requestEvasionRate))
        .map((evasionArmor) => evasionArmor.toJSON());
      return res.json(returnArmor);
    });
  }

  /* Returns all armor that has a cost <= the price given for the
     /api/armor/price/:priceAmount URI */
  function getByPrice(req, res) {
    const requestedPrice = req.params.priceAmount;

    Armor.find((err, armorPieces) => {
      if (err) {
        return res.send(err);
      }

      const returnArmor = armorPieces.filter((armor) => (armor.price <= requestedPrice))
        .map((requestedArmor) => requestedArmor.toJSON());
      return res.json(returnArmor);
    });
  }

  /* Returns all armor related to the specific character passed as an
     argument to the URI /api/armor/character/:characterName */
  function getByCharacterName(req, res) {
    const query = {};
    query.characterName = req.params.characterName;

    searchByQuery(query, res);
  }

  /* Returns all armor back with that starts with the prefix given (/api/armor/:prefix URI) */
  function getByArmorPrefix(req, res) {
    const requestedPrefix = req.params.prefix;

    Armor.find((err, armorPieces) => {
      if (err) {
        return res.send(err);
      }

      const returnArmor = armorPieces.filter((armor) => (armor.name.startsWith(requestedPrefix)))
        .map((prefixedArmor) => prefixedArmor.toJSON());
      return res.json(returnArmor);
    });
  }

  return {
    // eslint-disable-next-line max-len
    get, getByEffectTypeAndAmount, getByEffectType, getByDefense, getByEvasion, getByPrice, getByCharacterName, getByArmorPrefix,
  };
}

module.exports = armorController;
