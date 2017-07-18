/**
 * Created by lnthao on 7/18/2017.
 */
const showHome = async(ctx, next)=>{
    await ctx.render("home.pug", {questions:[]});
};

module.exports = {showHome};