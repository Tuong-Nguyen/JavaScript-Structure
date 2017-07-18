/**
 * Created by lnthao on 7/18/2017.
 */
showAddQuestion = async (ctx, next) => {
    await ctx.render("newQuestion.pug");
};

addQuestion = async(ctx, next) => {
    const data = ctx.request.body;
    const question = {
        title: data.questionTitle,
        tags: splitAndTrimTagString(data.tagString)
    };
    const inserted = await ctx.mongo.collection('questions').insert(question);
    ctx.response.redirect('/question/' + inserted.ops[0]._id.toString());
};

function splitAndTrimTagString(tagString){
    let tags = tagString.split(',');
    for(let i = 0; i < tags.length; i++){
        tags[i] = tags[i].trim();
        // remove empty tags
        if (tags[i].length === 0) {
            tags.splice(i);
            i--;
        }
    }
    return tags;
};
module.exports = {showAddQuestion, addQuestion};