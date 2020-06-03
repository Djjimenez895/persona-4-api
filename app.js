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

// TODO: require models here
const Item = require('./models/itemModel');
const Skill = require('./models/skillModel');

// TODO: Require routers here as well
const itemRouter = require('./routes/itemRouter')(Item);
const skillRouter = require('./routes/skillRouter')(Skill);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO: add routers here after they're made
app.use('/api', itemRouter);
app.use('/api', skillRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Persona 4 API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app; // Exporting for integration testing
