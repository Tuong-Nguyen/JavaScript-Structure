import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  describe('should add course when passed CREATE_COURSE_SUCCSES', () => {
    //arrange
    const initialState = [
      {
        id: 'A',
        title: 'A'
      },
      {
        id: 'B',
        title: 'B'
      },
      {
        id: 'C',
        title: 'C'
      }
    ];

    const newCourse = { id: 'D', title: 'D'};
    const course = { id: 'B', title: 'New title'};
    const action = actions.createCoursesSuccess(newCourse);
    const actionUpdate = actions.updateCoursesSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const newStateUpdate = courseReducer(initialState, actionUpdate)
    const updatedCourse = newStateUpdate.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    //assert

    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
    expect(newState[3].title).toEqual('D');
    expect(updatedCourse.title).toEqual('New title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(4);
  });
});
