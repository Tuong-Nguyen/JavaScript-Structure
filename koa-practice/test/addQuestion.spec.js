/**
 * Created by lnthao on 7/18/2017.
 */
const nconf = require('nconf');
nconf.file({file: `${__dirname}/env.json`});

const app = require('../app');
const request = require('supertest').agent(app.listen());

const mm = require("mongodb-migrations");
const migrations = require("./../migrations/questionMigrations");

describe("Adding questions", () => {
    const config = {
        host: nconf.get('database:host'),
        port: nconf.get('database:port'),
        db: nconf.get('database:db')
    };
    const migrator = new mm.Migrator(config);

    before((done) => {
        migrator.add(migrations);
        migrator.migrate(done);
    });

    after((done) => {
        migrator.rollback(done);
    });

    let a_question_form = {
        questionTitle: "A question?",
        tagString: "tag1, tag2, tag3"
    };

    it("has nice page to add questions", (done) => {
        request
            .get("/question")
            .expect(200)
            .expect('Content-Type', /html/)
            .end(done);
    });

    it("stores correct formatted forms as new question", (done) => {
        request
            .post("/question")
            .send(a_question_form)
            .expect(302) // a redirect
            .expect("location", /^\/question\/[0-9a-fA-F]{24}$/)
            .end(done);
    });
});