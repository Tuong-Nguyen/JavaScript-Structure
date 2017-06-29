/**
 * Created by nctuong on 6/27/2017.
 */

module.exports = {
  showNewQuestion,
  createQuestion
};

async function showNewQuestion(context, next) {
  await context.render('questionNew.pug');
}

async function createQuestion(context, next) {
  const question = context.request.body;
  try {
    const result = await context.mongo.collection('questions').insertOne(question);
    if(result.insertedCount > 0) {
      context.set('location', `/question/${result.insertedId}`);
      context.status = 302;
    }
  }
  catch(error) {
   context.throw(500, error);
  }
}
