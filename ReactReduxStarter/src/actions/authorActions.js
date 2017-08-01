/**
 * Created by lnthao on 7/5/2017.
 */
import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import axios from 'axios';

export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
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
