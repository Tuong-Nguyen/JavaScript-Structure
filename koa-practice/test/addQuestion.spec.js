/**
 * Created by lnthao on 7/18/2017.
 */
var app = require('../app');
var request = require('supertest').agent(app.listen());

describe("Adding questions", () => {
    it("has nice page to add questions", (done) => {
        request
            .get("/question")
            .expect(200)
            .expect('Content-Type', /html/)
            .end(done);
    });
});