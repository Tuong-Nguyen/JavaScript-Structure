/**
 * Created by lnthao on 7/4/2017.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
  console.log('Action - LOAD_COURSES_SUCCESS');
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error=>{
      throw(error);
    });
  }
}
