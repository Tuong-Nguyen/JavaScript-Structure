/**
 * Created by QuanLe on 6/24/2017.
 */
require('dotenv').config({path: `${__dirname}/.env`});
const app = require('../../src/server');
const mm = require('mongodb-migrations');
const dbSetup = require('./UsersApiDbSetup');

const request = require('supertest')(app.listen());

describe('User API', () => {

  let migrator;

  before((done) => {
    const config = {
      host: process.env.MONGO_HOST,
      port: process.env.MONGO_PORT,
      db: process.env.MONGO_DB
    };
    migrator = new mm.Migrator(config);
    migrator.add(dbSetup);
    migrator.migrate(done);
  });

  after((done) => {
    migrator.rollback(done);
  });

  describe('# Add user', () => {
    it('succeeds with valid information', (done) => {
      const a_user = {name: 'Marcus', age: 42, height: 1.96};
      request.post('/user')
        .send(a_user)
        .expect("location", /^\/user\/[0-9a-fA-F]{24}$/)
        .expect(200, done);
    });

    it('fails for user with empty name', (done) => {
      const a_user = {age: 42, height: 1.96};
      request.post('/user')
        .send(a_user)
        .expect("name required")
        .expect(400, done);
    });
  });

  describe('# Get user', () => {
    it.only('with existing user id returns the user', (done) => {
      const userId = dbSetup.existingUserIds[0];
      request.get(`/user/${userId}`)
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(/Marcus/)
        .expect(200, done);
    });
  });

  describe('# Update user', () => {
    it('with new age return 204', (done) => {
      const userId = dbSetup.existingUserIds[1];
      const url = `/user/${userId}`;
      request.put(url)
        .send({age: 20, height: 1.5})
        .expect("location", url)
        .expect(204, done);
    });

    it('with non existing Id return 404', (done) => {
      const userId = '123';
      const url = `/user/${userId}`;
      request.put(url)
        .send({age: 20, height: 1.5})
        .expect(404, done);
    });
  });
});
