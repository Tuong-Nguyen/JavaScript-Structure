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
  const formData = context.request.body;
  const question = {
    title: formData.title,
    tags: parseTags(formData.tagString)
  };
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

function parseTags(tags){
  tags = tags.split(',');
  tags.forEach(tag => tag.trim());
  return tags;
}
