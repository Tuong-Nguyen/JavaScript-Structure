/**
 * Created by nctuong on 6/27/2017.
 */

require('dotenv').config({path: `${__dirname}/.env`});
const app = require('../../server');
const request = require('supertest')(app.listen());

describe('home', () => {
  it('# return the homepage', (done) => {
    request.get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
