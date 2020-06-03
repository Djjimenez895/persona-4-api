// TODO: Add items to this list and then pipe the data to mongo

db.items.insert([
  {
    name: 'Test Item 1',
    description: 'An item for testing',
    price: 90,
    itemType: 'hp',
  },
  {
    name: '2nd Test Item',
    description: 'Another item for testing',
    price: 100,
    itemType: 'sp',
  },
]);
