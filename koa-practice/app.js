/**
 * Created by lnthao on 7/13/2017.
 */
const Koa = require('koa');
const app = module.exports = new Koa();

const bodyParser = require('koa-bodyparser');
const router = require("koa-router")();
const mongo = require('koa-mongo');
const nconf = require('nconf');
const userRoutes = require('./userRoutes');

nconf.file({file: `${__dirname}/env.json`});

app.use(mongo({
    host: nconf.get('database:host'),
    port: nconf.get('database:port'),
    db: nconf.get('database:db')
}));

router.post('/user', userRoutes.addUser);
router.get('/user/:id', userRoutes.getUser);
router.put('/user/:id', userRoutes.updateUser);
router.del('/user/:id', userRoutes.deleteUser);

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
