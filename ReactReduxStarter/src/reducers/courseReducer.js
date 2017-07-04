/**
 * Created by lnthao on 7/4/2017.
 */
export default function courseReducer(state = [], action){
  switch (action.type) {
    case 'CREATE_COURSE':
      // state.push(action.course);
      // return state;
      return [...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
