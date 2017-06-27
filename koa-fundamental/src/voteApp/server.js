/**
 * Created by nctuong on 6/27/2017.
 */

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongo = require('koa-mongo');
const router = require('./route');
const views = require('koa-views');

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

  // Must be used before any router is used
  app.use(views(__dirname + '/views', {
  }));

  app.use(router.routes());
}





