/**
 * Created by lnthao on 7/18/2017.
 */
const questionIds = ['211111111111111111111111', '2111111111111111111112', '211111111111111111111113'];
module.exports = {
    id: 'Create a Question',
    existingQuestionIds: questionIds,
    up(done){
        const questions = [];
        for(let id of questionIds){
            questions.push(Object.assign({_id: id}, {title: 'Questions?', tags: ['tag1', 'tag2']}));
        }
        this.db.collection('questions').insert(questions, done);
    },

    down(done) {
        this.db.collection('questions').remove({}, done);
    }
};