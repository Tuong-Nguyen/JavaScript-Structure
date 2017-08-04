import * as types from './actionTypes';
import practiceApi from '../api/mockPracticeApi';
import { ajaxCallError, beginAjaxCall } from "./ajaxStatusAction";


//------------------------------------------------
//export any function when read/update/create data
//------------------------------------------------
export function loadPracticesSuccess(practices) {
  return {
    type: types.LOAD_PRACTICE_SUCCESS,
    practices
  };
}


//------------------------------------------------
//export function for action read/update/create data
//------------------------------------------------
export function loadPractices() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    return practiceApi.getAllPractices()
      .then(practices => {
        dispatch(loadPracticesSuccess(practices));
      })
      .catch(error => {
        throw(error);
      });
  };
}
