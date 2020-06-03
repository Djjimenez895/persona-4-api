const mongoose = require('mongoose');

const { Schema } = mongoose;

const weaponModel = new Schema(
  {
    name: { type: String },
    effectType: { type: String }, // Strength, Luck, Agility, etc.
    effectAmount: { type: Number }, // +1, +20, etc.
    description: { type: String },
    attack: { type: Number },
    hit: { type: Number },
    price: { type: Number },
    character: {
      type: String,
      enum: ['yu', 'chie', 'yosuke', 'naoto', 'rise', 'kanji', 'teddie', 'yukiko'],
      default: 'misc',
    },
  },
);

module.exports = mongoose.model('Weapon', weaponModel);
