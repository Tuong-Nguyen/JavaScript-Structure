/**
 * Created by nctuong on 6/27/2017.
 */

const nconf = require('nconf');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongo = require('koa-mongo');
const router = require('./route');
const views = require('koa-views');
const serveStatic = require('koa-static');
const app = new Koa();
module.exports = app;


bootstrap();

/**
 * Set up middlewares
 */
function bootstrap() {
  app.use(bodyParser());

  app.use(mongo({
    host: nconf.get("Database:host"),
    port: nconf.get("Database:port"),
    db: nconf.get("Database:db"),
    max: 100,
    min: 1
  }));

  app.use(serveStatic(__dirname + '/public'));

  // Must be used before any router is used
  app.use(views(__dirname + '/views', {
  }));

  app.use(router.routes());
}





