import { createSelector } from 'reselect';

export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

export const setStateOfCourses = createSelector(
  [courses => courses],
  (courses) => {
    return (courses == null || courses == []) ? {
      id: "clean-code",
      title: "Clean Code: Writing Code for Humans",
      watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
      authorId: "cory-house",
      length: "3:10",
      category: "Software Practices"
    } : courses;
  }
);
