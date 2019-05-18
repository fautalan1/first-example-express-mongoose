const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const api = require('./routes/api');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/task', api);

app.get('/', (req, res) => {
  res.status(200).send('hello');
});

module.exports = app;
