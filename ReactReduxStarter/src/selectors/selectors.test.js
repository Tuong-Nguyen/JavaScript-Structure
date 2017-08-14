import expect from 'expect';
import { authorsFormattedForDropdown, setStateOfCourses } from "./selectors";

const coursesList = [
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

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {
          id: 'cory-house', firstName: 'Cory', lastName: 'House'
        },
        {
          id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'
        }
      ];

      const expected = [
        {
          value: 'cory-house', text: 'Cory House'
        },
        {
          value: 'scott-allen', text: 'Scott Allen'
        }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});



describe('Courses Selectors', () => {
  describe('mapStateToProps from state of courses', () => {
    it('should return courses data', () => {
      const courses =  coursesList;
      expect(setStateOfCourses(courses)).toEqual(courses);
    });

    it('should return courses data is default', () => {
      const courses = null;
      let a = setStateOfCourses(courses);
      expect(setStateOfCourses(courses)).toEqual(coursesList[1]);
    });
  });
});
