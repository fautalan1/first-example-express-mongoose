'use strict';

const Task = require('../models/task');

const save = (req, res) => {
  const task = new Task(req.body);
  return task
    .save()
    .then(resFactory => res.status(200).json(resFactory))
    .catch(err => console.log(err));
};

const recover = (req, res) => {
  Task.find(req.body).exec((error, taks) => {
    console.log(taks);
    if (error) return res.status(400).json(error);
    return res.status(200).json(taks);
  });
};

const findAll = (req, res) => {
  Task.find({}).exec((error, taks) => {
    console.log(taks);
    if (error) return res.status(400).json(error);
    return res.status(200).json(taks);
  });
};

module.exports = { findAll, save, recover };
