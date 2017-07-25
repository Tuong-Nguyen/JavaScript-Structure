/**
 * Created by nkim on 7/25/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import CourseForm from '../../components/course/CourseForm';
import { authorsFormattedForDropdown } from '../../selectors/selectors';

storiesOf('CourseForm', module)
  .add('Not saving with input', () => {

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

    const formattedAuthors = authorsFormattedForDropdown(authors);

    const course = {
      id: "clean-code",
      title: "Clean Code: Writing Code for Humans",
      watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
      authorId: "cory-house",
      length: "3:10",
      category: "Software Practices"};


    return (
    <CourseForm allAuthors={formattedAuthors}
                onChange=""
                onSave=""
                course={course}
                errors={{}}
                saving={false}/>
  )})
  .add('Saving with input', () => {

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

    const formattedAuthors = authorsFormattedForDropdown(authors);

    const course = {
      id: "clean-code",
      title: "Clean Code: Writing Code for Humans",
      watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
      authorId: "cory-house",
      length: "3:10",
      category: "Software Practices"};


    return (
      <CourseForm allAuthors={formattedAuthors}
                  onChange=""
                  onSave=""
                  course={course}
                  errors={{}}
                  saving={true}/>
    )})
  .add('Errors with empty input', () => {

    const errors = {
      title: "The title is empty",
      category: "The category isn't selected",
      length: "Validate the length of course"
    };

    return (
      <CourseForm allAuthors={[{}]}
                  onChange=""
                  onSave=""
                  course={{}}
                  errors={errors}
                  saving={false}/>
    )});
