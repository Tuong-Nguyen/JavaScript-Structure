const Koa = require('koa');
const app = module.exports =  new Koa();
const router = require('koa-route');
const parse = require('co-body');
const mongo = require('koa-mongo');
//const monk = require('monk');
//const wrap = require('co-monk');
//const db = monk('192.168.104.45:27017/mydb');
//const db = monk('localhost:27017/mydb');
//const users = wrap(db.get('users'));

// app.use(router.post('/user/', addUser));
//
// async function addUser(ctx, next) {
//     var userFromRequest = await parse(this);
//     console.log(userFromRequest);
//     var insertUser = await users.insert(userFromRequest);
//     console.log(insertUser._id);
//     this.set('location', `/user/${insertUser._id}`);
//     this.status = 200;
//
// }

var users;
app.use(mongo({
        host: 'localhost',//'192.168.104.45', localhost
        port: 27017,
        db: 'mydb',
        max: 100,
        min: 1
}));
// app.use(async function (ctx, next) {
//     users = await ctx.mongo.db('mydb').collection('users');
//     await next;
// })
app.use(router.post('/user/',async function (ctx, next) {
    users = await ctx.mongo.db('mydb').collection('users');
    let temp = await users.find().toArray();
    let id = temp.length+1;
    var userFromRequest = await parse(ctx);
    userFromRequest._id = id;
    console.log(userFromRequest);
    var insertUser = await users.insert(userFromRequest);
    if(insertUser.insertedCount > 0){
        console.log(insertUser.ops[0]._id);
        ctx.set('insetedId', insertUser.ops[0]._id);
        ctx.set('location', `/user/${insertUser.ops[0]._id}`);
        ctx.status = 200;
    }else {
        ctx.status = 400;
    }
}));

app.use(router.get('/user/:id', async function (ctx, id,next) {
    console.log(id);
    //console.log(mongo.ObjectId('59520346d21396135490e2e3'));
    users = await ctx.mongo.db('mydb').collection('users');
    var cursor = await users.find({_id:  parseInt(id)});
    var data = await cursor.hasNext() ? cursor.next() : null;

    if (data) {
        //var obj = promise.querystring('name');
        //console.log(tojson(promise));
        ctx.body = data;
        ctx.status = 200;
    }else {
        ctx.status = 404;
    }
}));
app.use(router.put('/user/:id',async function (ctx,id, next) {
    var userFromRequest = await parse(ctx);
    users = await ctx.mongo.db('mydb').collection('users');
    var cursor = await users.findOneAndUpdate({_id: parseInt(id)}, {$set: {name: userFromRequest.name, age: userFromRequest.age}});
    if(cursor.value){
        ctx.status = 200;
    }else {
        ctx.status = 404;
    }
}));
app.use(router.del('/user/:id',async function (ctx,id, next) {
    users = await ctx.mongo.db('mydb').collection('users');
    var result = await users.findOneAndDelete({_id: parseInt(id)});
    if(result.value){
        ctx.status = 200;
    }else {
        ctx.status = 404;
    }
}));


// x-response-time
app.use(async function (ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});