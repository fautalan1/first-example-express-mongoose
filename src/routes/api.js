const todos = require('../todos/todos');

const { Router } = require('express');
const { isString } = require('lodash');

const router = Router();

router.get('/list', (req, body) => {
  body.status(200).json([{ name: 'ivanGATo' }]);
});

module.exports = router;
