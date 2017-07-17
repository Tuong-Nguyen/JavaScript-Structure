/**
 * Created by lnthao on 7/14/2017.
 */
const userIds = ['211111111111111111111111', '2111111111111111111112', '211111111111111111111113'];
module.exports = {
    id: 'Create a user',
    existingUserIds: userIds,
    up(done){
        const users = [];
        for(let id of userIds){
            users.push(Object.assign({_id: id}, {name: 'Marcus', age: 42, height: 1.96}));
        }
        this.db.collection('users').insert(users, done);
    },

    down(done) {
        this.db.collection('users').remove({}, done);
    }
};