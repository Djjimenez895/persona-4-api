function accessoriesController(Accessory) {
  /* TODO: Implement a get request (/accessories URI) that
  returns all accessories in the database. */
  function get(req, res) {

  }

  /* TODO: Implement a post request (/accessories URI) that adds a new accessory to the database */
  function post(req, res) {

  }

  /* TODO: Implement a get request (/accessories/effect/:effectType/:amount URI) that gets
  all accessories with a specified effect type and a specific amount for
  that effect type (i.e., strength +1, luck +3, etc.) */
  function getByEffectTypeAndAmount(req, res) {

  }

  /* TODO: Implement a get request (/accessories/effect/:effectType URI) that gets
  all accessories with a specified effect type. */
  function getByEffectType(req, res) {

  }

  /* TODO: Implement a get request (/accessories/price/:amount URI) that gets all
  accessories with a price <= the one provided */
  function getByPrice(req, res) {

  }

  /* TODO: Imeplement a get request (/accessories/:prefix URI) that gets all accessories with a name
  that contains that given prefix */
  function getByAccessoryPrefix(req, res) {

  }

  return {
    get, post, getByEffectTypeAndAmount, getByEffectType, getByPrice, getByAccessoryPrefix,
  };
}

module.exports = accessoriesController;
