const app = require('../../controllers/HomeController.js');
const request = require('supertest').agent(app.listen());

describe('html render', () =>{
    "use strict";
    // it('home reder', (done) => {
    //     request.get('/')
    //         .expect(200)
    //         .expect('Content-Type', /html/)
    //         .end(done);
    // });
    //
    // it('get request', (done) => {
    //     request.get('/user/2')
    //         .expect(200 , done);
    // });
    //
    // it('put request', (done) => {
    //     var user = { _id: 1, name: 'ABC', age: 33 };
    //     request.post('/user/1')
    //         .send(user)
    //         .expect(200 , done);
    // });

    it('post request', (done) => {
        var user = { name: 'ABC', age: 33 };
        request.post('/user/')
            .send(user)
            .expect(200 , done);
    });
});