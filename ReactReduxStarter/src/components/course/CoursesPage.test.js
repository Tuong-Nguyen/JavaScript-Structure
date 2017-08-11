import expect from 'expect';
import { mount, shallow } from 'enzyme';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import { browserHistory } from 'react-router';
import CourseList from "./CourseList";
import CoursesPage from './CoursesPage';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore.dev';
import { loadCourses } from '../../actions/courseActions';
import { loadAuthors } from '../../actions/authorActions';

function setUp() {
  //arrange
  const store = configureStore();
  store.dispatch(loadCourses);
  store.dispatch(loadAuthors);

  const wrapper = mount(
    <Provider store={store}>
      <CoursesPage />
    </Provider>
  );
  return wrapper;
}

describe('Course Page', () => {
  test('Should render the container component', () => {
    //arrange
    const wrapper = setUp();
    //assert
    expect(wrapper.find(CourseList).length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Courses');
    expect(wrapper.find('input').prop('type')).toBe('submit');
    expect(wrapper.find('input').props().value).toBe('Add course');
    expect(wrapper.find('table').length).toBe(1);
  });


});
