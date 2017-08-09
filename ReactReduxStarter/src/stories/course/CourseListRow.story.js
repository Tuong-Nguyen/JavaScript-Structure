import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Course list row', module)
  .add('Display row course', () => (
    <CourseListRow course={course}/>
  ))

  .add('Display row course with props is null', () => (
    <CourseListRow course={[]}/>
  ));
