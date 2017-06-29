/**
 * Created by nttao on 6/28/2017.
 */
const koa = require('koa');
const router = require('koa-route');
const app = module.exports = new koa();
const render = require('./lib/render.js');
const serve = require('koa-static');
const parse = require('co-body');
const mongo = require('koa-mongo');
// const views = require('koa-views');
//
// app.use(views(__dirname + './../views/',{
//     map: {
//         html: 'underscore'
//     }
// }));

app.use(serve(__dirname + './../'));

app.use(mongo({
    host: 'localhost',//'192.168.104.45', localhost
    port: 27017,
    db: 'mydb',
    max: 100,
    min: 1
}));

app.use(router.get('/',async function (ctx, next) {
    //ctx.body = await ctx.render('index');
    ctx.body = await render('index');
}));

app.use(router.get('/user/register',async function (ctx, next) {
    //ctx.body = await ctx.render('index');
    ctx.body = await render('user/register');
}));

app.use(router.get('/user/manager',async function (ctx, next) {
    //ctx.body = await ctx.render('index');
    ctx.body = await render('user/manager');
}));

app.use(router.post('/user/',async function (ctx, next) {
    var users = await ctx.mongo.collection('users');
    var tempArr = await users.find().toArray();
    var user = await parse(ctx);
    user._id = tempArr.length + 1;
    var rs = await users.insert(user);
    if(rs.insertedCount > 0){
        ctx.body = await render('user/profile', user);
        ctx.status = 200;
    }else {
        ctx.status = 500;
    }
}));

app.use(router.get('/user/:id',async function getProfile(ctx,id, next) {
    var users = await ctx.mongo.collection('users');
    var cursor = await users.find({_id: parseInt(id)});
    var data = await cursor.hasNext() ? cursor.next() : null;
    if(data){
        let user = await data.then(function (data) {
            return data;
        }).catch(()=>{
            "use strict";
            return null;
        });
        ctx.body = await render('user/profile', user);
        ctx.status = 200;
    }else{
        ctx.status = 404;
    }
}));

app.use(router.post('/user/:id',async function getProfile(ctx,id, next) {
    var user = await parse(ctx);
    var users = await ctx.mongo.collection('users');
    var cursor = await users.findOneAndUpdate({_id: parseInt(id)}, {$set:{name: user.name, age: user.age}});
    if(cursor.value) {
        ctx.body = await render('user/profile', user);
        ctx.status = 200;
    }else {
        ctx.status = 500;
    }
}));

app.listen(3000, ()=>{
    "use strict";
   console.log('Listening on port 3000');
});