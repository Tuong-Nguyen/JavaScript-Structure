/**
 * Created by lnthao on 7/7/2017.
 */
import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './courseActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

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

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Example of nock
    // nock('http://example.com')
    //   .get('/courses')
    //   .reply(200, {body: {course:[{id: 1, firstName:'Cory', lastName:'House'}]}});
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {course:[{id: 1, firstName:'Cory', lastName:'House'}]}}
    ];

    const store = mockStore({courses:[]});
    store.dispatch(courseActions.loadCourses()).then(()=>{
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
    });
    // callback to tell Mocha async work is completed
    done();
  });
});
