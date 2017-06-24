/**
 * Created by nctuong on 6/23/2017.
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongo = require('koa-mongo');
const router = require('./route');

const app = new Koa();
module.exports = app;

app.use(bodyParser());

app.use(mongo({
  host: '192.168.0.103',
  port: 27017,
  db: 'koa-mongodb',
  max: 100,
  min: 1
}));

app.use(router.routes());

app.use(async (ctx) => {

  ctx.body = 'Hello World!';
});


app.listen(3000, () => {
  console.log('Server start on port 3000');
});




