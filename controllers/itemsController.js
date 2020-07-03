function itemsController(Item) {
  /*
  Uses .find to search the database given a query
  Helps reduce code redundancy
  */
  function searchByQuery(query, res) {
    Item.find(query, (err, items) => {
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
    Searches for all items that have names with the given prefix
  */
  function searchByItemNamePrefix(query, prefix, res) {
    Item.find(query, (err, items) => {
      if (err) {
        return res.send(err);
      }
      const returnItems = items.filter((item) => (item.name.startsWith(prefix)))
        .map((prefixedItem) => prefixedItem.toJSON());
      return res.json(returnItems);
    });
  }

  /*
    Posts a new item object to the database, all fields must be present.
  */
  function post(req, res) {
    const item = new Item(req.body);

    if (!req.body.name || !req.body.description || !req.body.price || !req.body.itemType) {
      res.status(400);
      return res.send('All fields are required');
    }
    item.save();
    res.status(201);
    return res.json(item);
  }

  /*
    Get request for finding all items in the database
  */
  function get(req, res) {
    const query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }

    searchByQuery(query, res);
  }

  // Finds items based on the itemType field (i.e., returns all items with itemType 'hp')
  function getByItemType(req, res) {
    const query = {};

    // This checks the parameter in the URI to determine the type of object you want to return
    if (req.params.itemType) {
      query.itemType = req.params.itemType;
    }

    searchByQuery(query, res);
  }

  function getByItemNamePrefix(req, res) {
    const query = {};
    let name = '';

    if (req.params.itemName) {
      name = req.params.itemName;
      name.replace('-', ' ');
    }

    searchByItemNamePrefix(query, name, res);
  }

  // TODO: Implement this method so that it searches the database
  // for items with a price <= the price given
  function searchByItemPrice(query, price, res) {
    return res.json('');
  }

  // Gets items with a price <= the one provided
  function getByItemPrice(req, res) {
    const query = {};
    let price = '';

    if (req.params.itemPrice) {
      price = req.params.itemPrice;
    }

    // Function needs to be implemented
    searchByItemPrice(query, price, res);
  }

  return {
    post, get, getByItemType, getByItemNamePrefix, getByItemPrice,
  };
}

module.exports = itemsController;
