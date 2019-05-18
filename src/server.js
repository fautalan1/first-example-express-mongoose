const express = require('express');

const app = express();

app.get('/tasks', (req, res) => {
  res.status(200).json({
    tasks: [
      {
        name: 'GABI LABURA',
        time: 12
      }
    ]
  });
});

module.exports = app;
