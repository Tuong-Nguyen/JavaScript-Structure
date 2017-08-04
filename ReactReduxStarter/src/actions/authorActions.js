import authorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusAction';
import axios from 'axios';

export function loadAuthorsSuccess(authors) {
  console.log('dsfs');
  return {
    type: types.LOAD_AUTHORS_SUCCESS, authors
  };
}

export function loadAuthors() {
  console.log('call author');
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }).catch(error => {
        throw(error);
      });
  };
}

export function loadAuthorsAPI(){
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.get("http://192.168.104.45:4001/authors")
      .then(response => {
        dispatch(loadAuthorsSuccess(response.data));
      }).catch(error => {
        throw(error);
      });
  };
}
