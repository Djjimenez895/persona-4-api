function accessoriesController(Accessory) {
  /* TODO: Implement a get request (/api/accessories URI) that
  returns all accessories in the database. */
  function get(req, res) {

  }

  /* TODO: Implement a get request (/api/accessories/effect/:effectType/:amount URI) that gets
  all accessories with a specified effect type and a specific amount for
  that effect type (i.e., strength +1, luck +3, etc.) */
  function getByEffectTypeAndAmount(req, res) {

  }

  /* TODO: Implement a get request (/api/accessories/effect/:effectType URI) that gets
  all accessories with a specified effect type. */
  function getByEffectType(req, res) {

  }

  /* TODO: Implement a get request (/api/accessories/price/:amount URI) that gets all
  accessories with a price <= the one provided */
  function getByPrice(req, res) {

  }

  /* TODO: Implement a get request (/api/accessories/:prefix URI) that gets
  all accessories with a name that contains that given prefix */
  function getByAccessoryPrefix(req, res) {

  }

  return {
    get, getByEffectTypeAndAmount, getByEffectType, getByPrice, getByAccessoryPrefix,
  };
}

module.exports = accessoriesController;
