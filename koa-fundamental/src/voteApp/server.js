/**
 * Created by nctuong on 6/27/2017.
 */

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
}
