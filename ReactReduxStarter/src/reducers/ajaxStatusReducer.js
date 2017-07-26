/**
 * Created by nttao on 7/17/2017.
 */
export default function AjaxStatusReducer(state, action) {
  switch (action.type){
    case 'BEGIN_AJAX_CALL':
      return [...state];
    default:
      return state;
  }
}
