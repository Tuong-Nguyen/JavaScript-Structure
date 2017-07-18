/**
 * Created by lnthao on 7/13/2017.
 */
const Koa = require('koa');
const app = module.exports = new Koa();

const bodyParser = require('koa-bodyparser');
const router = require("koa-router")();
const mongo = require('koa-mongo');
const nconf = require('nconf');
const serve = require('koa-static');
const render = require('./lib/render');

nconf.file({file: `${__dirname}/env.json`});

// App configuration
app.use(serve(__dirname + "/public"));

app.use(mongo({
    host: nconf.get('database:host'),
    port: nconf.get('database:port'),
    db: nconf.get('database:db')
}));

const userRoutes = require('./routes/userRoutes');
router.post('/user', userRoutes.addUser);
router.get('/user/:id', userRoutes.getUser);
router.put('/user/:id', userRoutes.updateUser);
router.del('/user/:id', userRoutes.deleteUser);

const homeRoutes = require('./routes/homeRoutes');
router.get('/', homeRoutes.showHome);

const questionRoutes = require('./routes/questionRoutes');
router.get('/question', questionRoutes.showAddQuestion);
router.post('/question', questionRoutes.addQuestion);

app.use(render);
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
