/**
 * Created by lnthao on 7/18/2017.
 */
showAddQuestion = async (ctx, next) => {
    await ctx.render("newQuestion.pug");
};
module.exports = {showAddQuestion};