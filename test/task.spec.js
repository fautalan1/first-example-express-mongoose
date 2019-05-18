const request = require('supertest');
const server = require('../src/server.js');
const assert = require('assert');

describe('/tasks', () => {
  it('should get status ok', () => {
    return request(server)
      .get('/tasks')
      .expect(200)
      .then(response => {
        assert(response.body.tasks.length, 1);
      });
  });
});
