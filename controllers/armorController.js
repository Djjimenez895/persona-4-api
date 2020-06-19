function armorController(Armor) {
  /* TODO: Implement a get request (/api/armor URI) that returns all
  armor in the database */
  function get(req, res) {

  }

  /* TODO: Implement a post request (/api/armor URI) that returns all
  armor in the database */
  function post(req, res) {

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

  /* TODO: Implement a get request (/api/armor/defense/:defenseAmount URI)
  that returns all armor with >= the amount of defense given */
  function getByDefense(req, res) {

  }

  /* TODO: Implement a get request (/api/armor/evasion/:evasionAmount URI)
  that returns all armor with an evasion rating >= the amount given  */
  function getByEvasion(req, res) {

  }

  /* TODO: Implement a get request (/api/armor/price/:priceAmount URI)
  that returns all armor that has a cost <= the price given */
  function getByPrice(req, res) {

  }

  /* TODO: Implement a get request (/api/armor/character/:characterName URI)
  that returns all armor related to the specific character */
  function getByCharacterName(req, res) {

  }

  /* TODO: Implement a get request (/api/armor/:name URI) that gets
  all armor back with that starts with the prefix given */
  function getByArmorPrefix(req, res) {

  }

  return {
    // eslint-disable-next-line max-len
    get, post, getByEffectTypeAndAmount, getByEffectType, getByDefense, getByEvasion, getByPrice, getByCharacterName, getByArmorPrefix,
  };
}

module.exports = armorController;
