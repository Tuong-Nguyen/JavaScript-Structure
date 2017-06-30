/**
 * Created by nkim on 6/30/2017.
 */
export default function courseReducer(state = [], action){
  switch(action.type){
    case 'CREATE_COURSE':
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
