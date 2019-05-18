const { cloneDeep, values, toNumber, clone, isString, isBoolean } = require('lodash');

let currentId = 0;
let todosInternal = {};
const todos = {
  getAll: () => cloneDeep(values(todosInternal)),
  add: ({ description, done = false }) => {
    currentId += 1;
    const newTodo = { description, id: currentId, done };
    todosInternal[newTodo.id] = newTodo;
    return clone(newTodo);
  },
  get: id => clone(todosInternal[toNumber(id)]),
  update: (id, body) => {
    const todo = todos.get(id);
    if (isBoolean(body.done)) todo.done = body.done;
    if (isString(body.description)) todo.description = body.description;
    todosInternal[id] = todo;
    return clone(todo);
  },
  clear: () => {
    todosInternal = {};
  }
};

module.exports = todos;
