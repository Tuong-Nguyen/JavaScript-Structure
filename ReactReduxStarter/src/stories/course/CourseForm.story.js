import React from 'react';
import { storiesOf } from '@storybook/react';
import CourseForm from '../../components/course/CourseForm';
import { authorsFormattedForDropdown } from "../../selectors/selectors";

//init course, authors, displayAuthorFormattedDropdown
const course =
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  };

const authors = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
];

const displayAuthors = authorsFormattedForDropdown(authors);

storiesOf('Course form', module)
  .add('Test course form with empty event', () => {
    let props = {
      course: course,
      allAuthors: displayAuthors,
      onSave: () => { },
      onChange: () => { },
      saving: false,
      errors: {}
    };

    return (<CourseForm {...props}/>);
  })

  .add('Test course form with empty authors', () => {
    let props = {
      course: course,
      allAuthors: [],
      onSave: () => { },
      onChange: () => { },
      saving: false,
      errors: {}
    };

    return (<CourseForm {...props}/>);
  })

  .add('Test course form with saving = false', () => {
    let props = {
      course: course,
      allAuthors: displayAuthors,
      onSave: () => { },
      onChange: () => { },
      saving: false,
      errors: {}
    };

    return (<CourseForm {...props}/>);
  })

  .add('Test course form with saving = true', () => {
    let props = {
      course: course,
      allAuthors: displayAuthors,
      onSave: () => { },
      onChange: () => { },
      saving: true,
      errors: {}
    };

    return (<CourseForm {...props}/>);
  });
