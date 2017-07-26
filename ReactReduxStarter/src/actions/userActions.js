/**
 * Created by nttao on 7/12/2017.
 */
export const ADD_USER = 'ADD_USER';
export const LOAD_ALL_USERS = 'LOAD_ALL_USERS';
export function addUser(user){
  return {
    type: ADD_USER,
    user: user
  }
}
function loadAllUsersAction(users) {
  return {
    type: LOAD_ALL_USERS,
    users: users
  }
}
function getUsers() {
  var promise = new Promise((resolve, reject) =>{
    //get data from database ...
    let userList = [
      {name: 'ABC', age: 34, gender: 'male', admin: true},
      {name: 'DEF', age: 24, gender: 'female', admin: false},
      {name: 'GHJ', age: 33, gender: 'male', admin: false}
    ];
    resolve(userList);
  });
  return promise;
}
export function loadAllUsersWithThunk() {
  return (dispatch =>{
    return getUsers().then(users => {
      dispatch(loadAllUsersAction(users));
    }).catch(error => {
      throw(error);
    });
  });
}

function saveUserService(user){
  var promise = new Promise((resolve, reject) =>{
    //save data to database and return result
    resolve(user);
  });
  return promise;
}
export function saveUser(user) {
  if(user.age.isNumber){
     return ((dispatch, getState) =>{
        return saveUserService(user).then(user =>{
          if(user != null){
            dispatch(addUser(user));
          }
        });
     });
  }else{
    let error =  new Error();
    error.message = "Age must be number!";
    throw error;
  }
}
