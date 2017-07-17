const addUser = async (ctx, next) => {
    let user = ctx.request.body;
    if (!user.name) {
        ctx.throw(400, "name required");
    }
    const inserted = await ctx.mongo.collection('users').insert(user);
    ctx.response.set('location', '/user/' + inserted.ops[0]._id.toString());
    ctx.response.status = 200;
    next();
};

const getUser = async(ctx, next) => {
    const id = ctx.params.id;
    const user = await ctx.mongo.collection('users').findOne({_id: id});
    ctx.response.body = user;
    ctx.response.status = 200;
    next();
};

const updateUser = async (ctx, next) => {
    let user = ctx.request.body;
    const id = ctx.params.id;
    if (!user.name) {
        ctx.throw(400, "name required");
    }
    const updated = await ctx.mongo.collection('users').updateOne({_id: id}, user);
    ctx.response.set('location', '/user/' + id);
    ctx.response.status = 204;
    next();
};

const deleteUser = async(ctx, next) => {
    const id = ctx.params.id;
    const user = await ctx.mongo.collection('users').deleteOne({_id: id});
    ctx.response.status = 200;
    next();
};

module.exports = {addUser, getUser, updateUser, deleteUser};