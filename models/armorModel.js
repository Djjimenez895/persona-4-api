const mongoose = require('mongoose');

const { Schema } = mongoose;

const armorModel = new Schema(
  {
    name: { type: String },
    effectType: { type: String }, // Strength, Luck, Agility, etc.
    effectAmount: { type: Number }, // +1, +20, etc.
    description: { type: String },
    defense: { type: Number },
    evasion: { type: Number },
    price: { type: Number },
    characterName: {
      type: String,
      enum: ['Yu', 'Chie', 'Yosuke', 'Yukiko', 'Teddie', 'Kanji', 'Naoto'],
      default: 'n/a',
    },
  },
);

module.exports = mongoose.model('Armor', armorModel, 'armor');
