import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React, {PropTypes, Component} from 'react';
import rerender from 'react-test-renderer';
import {browserHistory} from 'react-router';
import CourseList from "./CourseList";
import CourseListRow from './CourseListRow';
import {Provider} from 'react-redux';
import configureStore from '../../store/configureStore.dev';
import {loadCourses} from '../../actions/courseActions';
import {loadAuthors} from '../../actions/authorActions';
import courseApi from '../../api/mockCourseApi';

const courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function setUp() {
  //arrange

  return mount(<CourseList courses={courses}/>);
}

describe('Course Page', () => {
  test('Should render the stateless component', () => {
    //arrange
    const wrapper = setUp();

    //assert
    expect(wrapper.find(CourseListRow).length).toBe(5);
    expect(wrapper.find('thead').length).toBe(1);
    expect(wrapper.find('th').length).toBe(5);
  });

  test('Should match to Snapshot', () => {
    //arrange
    const wrapper = rerender.create(
      <CourseList courses={courses}/>).toJSON();
    //act

    //assert
    //expect(wrapper).toMatchSnapshot();
  });

});
