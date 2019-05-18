const request = require('supertest');
const server = require('../src/server.js');
const assert = require('assert');

describe('/', () => {
  it('should get status ok', () => {
    return request(server)
      .get('/task/list')
      .expect(200)
      .then(response => {
        assert.strictEqual(response.body.length, 1);
      });
  });
});
