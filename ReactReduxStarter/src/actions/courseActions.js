/**
 * Created by lnthao on 7/4/2017.
 */
import * as types from './actionTypes';

export function createCourse(course){
  console.log('Action - createCourse');
  return {type: types.CREATE_COURSE, course};
}
