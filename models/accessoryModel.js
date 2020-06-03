const mongoose = require('mongoose');

const { Schema } = mongoose;

const accessoryModel = new Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    effectType: { type: String }, // Strength, Luck, Agility, etc.
    effectAmount: { type: Number }, // +1, +20, etc.
  },
);

module.exports = mongoose.model('Accessory', accessoryModel);
