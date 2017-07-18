/**
 * Created by lnthao on 7/14/2017.
 */
const nconf = require('nconf');
nconf.file({file: `${__dirname}/env.json`});

var app = require("../app.js");
var request = require("supertest").agent(app.listen());
var migrations = require("../migrations/userMigrations.js");
const mm = require("mongodb-migrations");

describe("Simple User Http Crud API", () => {
    var a_user = {name: "Marcus", age: 42, height: 1.96};
   it("adds new users", (done) => {
       request
           .post("/user")
           .send(a_user)
           .expect("location", /^\/user\/[0-9a-fA-F]{24}$/)
           .expect(200, done);
   });

   it("fails with validation error for users without name", (done) => {
      delete a_user.name;
      request
          .post("/user")
          .send(a_user)
          .expect("name required")
          .expect(400, done);
   });

   describe("Migrations test", ()=> {
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

       it("get existing user by id", (done) => {
           const existedUserId = migrations.existingUserIds[0];
           const url = '/user/' + existedUserId;
           request
               .get(url)
               .set("Accept", "application/json")
               .expect("Content-type", /json/)
               .expect(/Marcus/)
               .expect(/1.96/)
               .expect(200, done);
       });

       it("Updates an existing user", (done) => {
           const updateName = "Older Marcus";
          const existedUserId = migrations.existingUserIds[0];
          const url = '/user/' + existedUserId;

          request
              .put(url)
              .send({name: updateName, age: 43, height: 1.94})
              .expect("location", url)
              .expect(204, done);
          request
              .get(url)
              .set("Accept", "application/json")
              .expect("Content-type", /json/)
              .expect(updateName);
       });

       it("deletes an existing user", (done) => {
           const existedUserId = migrations.existingUserIds[0];
           const url = '/user/' + existedUserId;
           request
               .del(url)
               .expect(200, done);
       });
   });
});