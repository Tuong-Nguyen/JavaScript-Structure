/**
 * Created by nctuong on 6/23/2017.
 */
const app = require('./../src/server');
const  request = require('supertest').agent(app.listen());

describe('root', () => {
  it('receive Hello World', (done)=> {
    request.get('/')
      .expect('Hello World!')
      .expect(200, done);
  });
});
