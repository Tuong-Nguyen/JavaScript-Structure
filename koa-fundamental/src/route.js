/**
 * Created by QuanLe on 6/24/2017.
 */

const {addUser} = require('./UsersApi');

const koa_router = require('koa-router');
const router = new koa_router();

module.exports = router;

router.post('Create User', '/user', addUser);



