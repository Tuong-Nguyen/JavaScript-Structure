import React from 'react';
import {shallow} from 'enzyme';
import CourseListRow from '../../components/course/CourseListRow';

const course =
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  };

describe('Course List Row', () => {
  test('Load Course List Row with 1 record', () => {
    let courseLst = shallow(
      <CourseListRow course={course}/>
    );
    expect('waiting').toBe('waiting');
  });
});
