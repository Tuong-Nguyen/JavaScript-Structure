/**
 * Created by QuanLe on 6/24/2017.
 */
const app = require('../../src/server');
const request = require('supertest')(app.listen());

describe('User API', () => {
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
    it('with existing user id returns the user ', (done) => {
      const userId = '594e89114a03403b683be6fc';
      request.get(`/user/${userId}`)
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(/Marcus/)
        .expect(200, done);
    });
  });


});
