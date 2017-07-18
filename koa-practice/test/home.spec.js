/**
 * Created by lnthao on 7/18/2017.
 */
var app = require('../app');
var request = require('supertest').agent(app.listen());

describe("The homepage", () => {
   it("displays nicely without errors", (done) => {
      request
          .get('')
          .expect(200)
          .expect('Content-Type', /html/)
          .end(done);
   });
});