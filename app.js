const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

process.env.ENV = 'Test'; // Change this to Test when using the test database and running test cases

if (process.env.ENV === 'Test') {
  // const db = mongoose.connect('mongodb://localhost/persona4API_Test');
  // TODO: Make the connect credentials an environment variable and don't have it hardcoded in.
  const db = mongoose.connect(config.mongo.testDbConnectionString);
  console.log('Successfully connected to persona4_api_test DB');
} else {
  // const db = mongoose.connect('mongodb://localhost/persona4API_Prod');
  console.log('Successfully connected to Persona4API_Prod DB');
}

const port = process.env.PORT || 3000;

// Models
const Item = require('./models/itemModel');
const Skill = require('./models/skillModel');
const Accessory = require('./models/accessoryModel');
const Armor = require('./models/armorModel');
const Persona = require('./models/personaModel');
const Weapon = require('./models/weaponModel');

// Routers
const itemRouter = require('./routes/itemRouter')(Item);
const skillRouter = require('./routes/skillRouter')(Skill);
const accessoryRouter = require('./routes/accessoryRouter')(Accessory);
const armorRouter = require('./routes/armorRouter')(Armor);
const personaRouter = require('./routes/personaRouter')(Persona);
const weaponRouter = require('./routes/weaponRouter')(Weapon);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routers to the '/api' end point
app.use('/api', itemRouter);
app.use('/api', skillRouter);
app.use('/api', accessoryRouter);
app.use('/api', armorRouter);
app.use('/api', personaRouter);
app.use('/api', weaponRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Persona 4 API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app; // Exporting for integration testing
