/**
 * Created by nctuong on 6/23/2017.
 */
const Koa = require('koa');
const app = new Koa();

module.exports = app;

app.use(async (ctx) => {
  ctx.body = 'Hello World!';
});

app.listen(3000, () => {
  console.log('Server start on port 3000');
});




