/**
 * Created by nkim on 6/30/2017.
 */
import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
  switch(action.type){
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
