/**
 * Created by nctuong on 6/23/2017.
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongo = require('koa-mongo');
const router = require('./route');

const app = new Koa();
module.exports = app;


bootstrap();

/**
 * Set up middlewares
 */
function bootstrap() {
  app.use(bodyParser());

  app.use(mongo({
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    db: process.env.MONGO_DB,
    max: 100,
    min: 1
  }));

  app.use(router.routes());

  app.use(async (ctx) => {

    ctx.body = 'Hello World!';
  });
}





