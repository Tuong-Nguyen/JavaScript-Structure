/**
 * Created by QuanLe on 6/25/2017.
 */

const mongo = require('koa-mongo');

module.exports = {
  addUser,
  getUser
};

async function addUser(ctx, next){
  const user = ctx.request.body;
  if(!user.name){
    ctx.throw(400, "name required");
  }

  const result = await ctx.mongo.collection('users').insert(user);
  const userId = result.ops[0]._id.toString();
  ctx.response.set("location", `/user/${userId}`);
  ctx.response.status = 200;
}

async function getUser(ctx, next){
  const userId = ctx.params.id;

  const user = await ctx.mongo.collection('users').findOne({_id: userId});
  if(!user) {
    ctx.throw(404, 'Not found');
  } else {
    ctx.response.body = user;
    ctx.response.status = 200;
  }
}
