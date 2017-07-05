/**
 * Created by lnthao on 7/4/2017.
 */
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action){
  console.log('Reducer - courseReducer');
  switch (action.type) {
    case types.LOAD_COURSE_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
