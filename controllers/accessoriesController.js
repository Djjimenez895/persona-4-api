function accessoriesController(Accessory) {
  function searchByQuery(query, res) {
    Accessory.find(query, (err, items) => {
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

  /* Return all accessories in the database (/api/accessories URI) */
  function get(req, res) {
    const query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }

    searchByQuery(query, res);
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
