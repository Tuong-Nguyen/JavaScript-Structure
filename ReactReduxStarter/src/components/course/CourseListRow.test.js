import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React, {PropTypes, Component} from 'react';
import rerender from 'react-test-renderer';
import {browserHistory} from 'react-router';
import CourseListRow from './CourseListRow';

const course = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  }
];

function setUp() {
  //arrange

  return shallow(<CourseListRow course={course}/>);
}

describe('Course Page', () => {
  test('Should render the stateless component', () => {
    //arrange
    const wrapper = setUp();

    //assert UI
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('td').length).toBe(6);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('tr').length).toBe(1);

  });

});
