/**
 * Created by nttao on 7/12/2017.
 */
export default function userReducer(state = [], action) {
  switch (action.type){
    case 'ADD_USER':
      console.log('add user!');
      return [...state, Object.assign({}, action.user)];
    default:
      console.log('reducer do nothing');
      return state;
  }
}
