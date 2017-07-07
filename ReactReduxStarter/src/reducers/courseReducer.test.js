/**
 * Created by lnthao on 7/7/2017.
 */
import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [{title: 'A'}, {title:'B'}];
    const newCourse = {title:'C'};
    const action = actions.createCourseSuccess(newCourse);
    // act
    const newState = courseReducer(initialState, action);
    // assert
    expect(newState.length).toBe(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });
});
