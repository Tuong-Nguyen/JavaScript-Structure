/**
 * Created by lnthao on 7/4/2017.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import axios from 'axios';

export function loadCoursesSuccess(courses){
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses(){
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error=>{
      throw(error);
    });
  };
}

export function loadCoursesAPI(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return axios.get('http://192.168.104.45:4001/courses').then(response => {
      dispatch(loadCoursesSuccess(response.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course){
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
