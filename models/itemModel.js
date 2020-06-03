const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemModel = new Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number }, // Make sure you change db to reflect this change
    itemType: {
      type: String,
      enum: ['hp', 'sp', 'status', 'key', 'damage', 'misc'],
      default: 'misc',
    },
  },
);

module.exports = mongoose.model('Item', itemModel);
