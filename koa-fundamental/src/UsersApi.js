/**
 * Created by QuanLe on 6/25/2017.
 */

module.exports = {
  addUser
};

async function addUser(ctx, next){
  const user = ctx.request.body;

  const result = await ctx.mongo.collection('users').insert(user);
  const userId = result.ops[0]._id.toString();
  ctx.response.set("location", `/user/${userId}`);
  ctx.response.statusCode = 200;
  await next();
}
