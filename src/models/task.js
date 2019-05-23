const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});
module.exports = mongoose.model('Task', TaskSchema);
