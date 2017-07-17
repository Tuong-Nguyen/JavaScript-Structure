/**
 * Created by lnthao on 7/13/2017.
 */
const Koa = require('koa');
const app = module.exports = new Koa();

const bodyParser = require('koa-bodyparser');
const router = require("koa-router")();
const mongo = require('koa-mongo');
const nconf = require('nconf');

nconf.file({file: `${__dirname}/env.json`});

app.use(mongo({
    host: nconf.get('database:host'),
    port: nconf.get('database:port'),
    db: nconf.get('database:db')
}));

router.post('/user', async (ctx, next) => {
    let user = ctx.request.body;
    if (!user.name) {
        ctx.throw(400, "name required");
    }
    const inserted = await ctx.mongo.collection('users').insert(user);
    ctx.response.set('location', '/user/' + inserted.ops[0]._id.toString());
    ctx.response.status = 200;
    next();
});

router.get('/user/:id', async(ctx, next) => {
    const id = ctx.params.id;
    const user = await ctx.mongo.collection('users').findOne({_id: id});
    ctx.response.body = user;
    ctx.response.status = 200;
    next();
});

router.put('/user/:id', async (ctx, next) => {
    let user = ctx.request.body;
    const id = ctx.params.id;
    if (!user.name) {
        ctx.throw(400, "name required");
    }
    const updated = await ctx.mongo.collection('users').updateOne({_id: id}, user);
    ctx.response.set('location', '/user/' + id);
    ctx.response.status = 204;
    next();
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
