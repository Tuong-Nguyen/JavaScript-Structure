/**
 * Created by nttao on 7/17/2017.
 */
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const ADD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export function beginAjaxCall() {
  return {
    type: BEGIN_AJAX_CALL
  }
}
