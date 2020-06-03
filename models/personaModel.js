const mongoose = require('mongoose');

const { Schema } = mongoose;

const personaModel = new Schema(
  {
    name: { type: String },
    arcana: { type: String },
    level: { type: Number },
    strength: { type: Number },
    magic: { type: Number },
    endurance: { type: Number },
    agility: { type: Number },
    luck: { type: Number },
    physical: { type: String },
    fire: { type: String },
    ice: { type: String },
    electric: { type: String },
    wind: { type: String },
    light: { type: String },
    dark: { type: String },
    skills: [
      {
        skill: { type: mongoose.Schema.Types.ObjectId },
        learnedAtLevel: { type: Number },
      },
    ],
  },
);

module.exports = mongoose.model('Persona', personaModel);
