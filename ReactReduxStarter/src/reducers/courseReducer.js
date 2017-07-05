/**
 * Created by lnthao on 7/4/2017.
 */
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action){
  console.log('Reducer - courseReducer');
  switch (action.type) {
    case types.CREATE_COURSE:
      // state.push(action.course);
      // return state;
      return [...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
