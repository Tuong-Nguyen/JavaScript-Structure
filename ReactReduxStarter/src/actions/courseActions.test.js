/**
 * Created by lnthao on 7/7/2017.
 */
import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './courseActions';

describe('Course Action', () => {
  describe('createCourseSuccess', ()=>{
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id:'clean-code', title:'Clean code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      }
      // act
      const action = courseActions.createCourseSuccess(course);
      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
