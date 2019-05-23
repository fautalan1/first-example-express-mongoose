const common = require('../src/config/common'),
  request = common.request,
  assert = common.assert,
  app = common.app,
  Task = require('../src/models/task');

it('should save a task', done => {
  request(app)
    .put('/api/task/create')
    .send({ name: 'gabi', description: 'jugar en primera', createdAt: Date() })
    .expect(200, done);
});

it('should get a task', done => {
  request(app)
    .put('/api/task/create')
    .send({ name: 'gabi', description: 'jugar en primera', createdAt: Date() })
    .expect(200)
    .then(() => {
      request(app)
        .get('/api/tasks')
        .expect(200)
        .then(res => {
          assert.strictEqual(res.body.length, 1);
          assert.strictEqual(res.body[0].name, 'gabi');
          assert.strictEqual(res.body[0].description, 'jugar en primera');
          done();
        });
    });
});

it('should get a task by name', done => {
  request(app)
    .put('/api/task/create')
    .send({ name: 'gabi', description: 'jugar en primera', createdAt: Date() })
    .expect(200)
    .then(() => {
      request(app)
        .post('/api/task/recover')
        .send({ name: 'gabi' })
        .expect(200)
        .then(res => {
          assert.strictEqual(res.body[0].name, 'gabi');
          assert.strictEqual(res.body[0].description, 'jugar en primera');
          done();
        });
    });
});
