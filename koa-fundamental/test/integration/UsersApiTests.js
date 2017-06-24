/**
 * Created by QuanLe on 6/24/2017.
 */
const app = require('../../src/server');
const request = require('supertest')(app.listen());

describe('User API', () => {
  it('# Add new user', (done) => {
    const a_user = { name: 'Marcus', age: 42, height:1.96};
    request.post('/user')
      .send(a_user)
      .expect("location", /^\/user\/[0-9a-fA-F]{24}$/)
      .expect(200, done);
  });
});
