// const app = require('../HttpAPIapp');
// const request = require('supertest').agent(app.listen());
//
// describe('Http API test', ()=>{
//     "use strict";
//    it('save user', (done)=>{
//        var User = {_id: 1,name: 'ABC', age: 33};
//        var obj = request.post('/user')
//            .send(User)
//            .expect(200, done);
//
//    });
//
//    it('get user', (done) =>{
//
//        request.get(`/user/2`)
//            .set('Accept','application/json')
//            .expect(200, done);
//    });
//     it('update user', (done) =>{
//         var User = {_id: 2,name: 'CDE', age: 22};
//         request.put('/user/2')
//             .send(User)
//             .expect(200, done);
//     });
//
//     it('del user', (done) =>{
//
//         request.del('/user/3')
//             .expect(200, done);
//     });
// });