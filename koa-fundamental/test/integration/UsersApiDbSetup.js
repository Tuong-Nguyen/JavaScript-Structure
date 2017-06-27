/**
 * Created by nctuong on 6/26/2017.
 */

const addedUserId = '111111111111111111111111';

module.exports = {
  id: 'Create a user',

  existingUserId: addedUserId,

  up(done){
    this.db.collection('users').insertOne({_id: addedUserId, name: 'Marcus', age: 42, height: 1.96}, done);
  },

  down(done){
    // delete all users
    this.db.collection('users').remove({}, done);
  }
};
