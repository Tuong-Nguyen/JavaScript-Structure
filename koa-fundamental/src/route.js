/**
 * Created by QuanLe on 6/24/2017.
 */

const {addUser, getUser, updateUser, deleteUser} = require('./UsersApi');

const koa_router = require('koa-router');
const router = new koa_router();

module.exports = router;

router.post('Create User', '/user', addUser);

router.get('Get User', '/user/:id', getUser);
router.put('Update User', '/user/:id', updateUser);
router.delete('Delete User', '/user/:id', deleteUser);

