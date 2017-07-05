/**
 * Created by lnthao on 7/4/2017.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  console.log('Reducer - courseReducer');
  switch (action.type) {
    case types.LOAD_COURSE_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
