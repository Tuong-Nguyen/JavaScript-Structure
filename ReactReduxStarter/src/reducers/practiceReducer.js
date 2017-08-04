import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function practiceReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_PRACTICE_SUCCESS:
      return action.practices;
    default:
      return state;
  }
}
