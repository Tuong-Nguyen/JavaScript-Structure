/**
 * Created by nkim on 7/25/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import CourseListRow from '../../components/course/CourseListRow';
import { authorsFormattedForDropdown } from '../../selectors/selectors';

storiesOf('CourseListRow', module)
  .add('with course', () => {
  const course = {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"};

  return (<CourseListRow course={course}/>);
})
  .add('with empty course', () => {

    return (<CourseListRow course={{}}/>);
  });
