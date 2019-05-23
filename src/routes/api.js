'use strict';

const express = require('express');
const { findAll, save, recover } = require('../controllers/task');

const api = express.Router();
api.put('/task/create', save);
api.post('/task/recover', recover);
api.get('/tasks', findAll);
module.exports = api;
