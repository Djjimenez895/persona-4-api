const mongoose = require('mongoose');

const { Schema } = mongoose;

const skillModel = new Schema(
  {
    name: { type: String },
    description: { type: String },
    skillType: {
      type: String,
      enum: ['physical', 'ice', 'fire', 'electric', 'wind', 'light', 'dark', 'healing', 'support', 'n/a'],
      default: 'n/a',
    },
    resourceCostType: {
      type: String,
      enum: ['hp', 'sp', 'n/a'],
      default: 'n/a',
    },
    resourceCostAmount: { type: Number },
    power: { type: Number },
    accuracy: { type: Number },
    criticalChance: { type: Number },
  },
);

module.exports = mongoose.model('Skill', skillModel);
