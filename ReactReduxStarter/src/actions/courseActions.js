import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusAction';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function createCoursesSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCoursesSuccess(course) {
  return {
    type: types.UPDATE_COURES_SUCCESS,
    course
  };
}


export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw(error);
      });
  };
}


export function saveCourses(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(courses => {
        course.id ? dispatch(updateCoursesSuccess(course)) :
        dispatch(createCoursesSuccess(courses));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}
