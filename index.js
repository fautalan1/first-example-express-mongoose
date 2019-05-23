'use strict';

const app = require('./app');
const db = require('./src/config/db');

require('dotenv').config();

const port = process.env.PORT || 3001;

db.connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`api is listening on port ${port}`);
    });
  })
  .catch(err => console.log(err));

module.exports = app;
