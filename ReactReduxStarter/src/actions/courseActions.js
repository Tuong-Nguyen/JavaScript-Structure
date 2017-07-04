/**
 * Created by nkim on 6/30/2017.
 */
import * as types from './actionTypes';

export function createCourse(course){
  return {type: types.CREATE_COURSE, course};
}
