/**
 * Created by nkim on 8/4/2017.
 */
import expect from 'expect';
import AuthorService from './AuthorService';
import CourseService from './CourseService';

describe("Test Service", () => {
  xit("get all Authors", (done) => {
    AuthorService.getAllAuthors()
      .then(res => {
        expect(res.data.length).toBeGreaterThan(0);
      })
      .then(done, done);
  });

  xit("add new an Author", (done) => {
    const newAuthor = {
      firstName: "Go Ku",
      lastName: "Son"
    };

    AuthorService.addAuthor(newAuthor)
      .then(res => {
        let newId = res.data.id;
        AuthorService.getAuthorById(newId)
          .then(res => {
            expect(res.data.firstName).toEqual("Go Ku");

          })
          .then(done, done);
      });

  });

  xit("update an Author", (done) => {
    const newAuthor = {
      firstName: 'Go Han',
      lastName: 'Son'
    };

    AuthorService.addAuthor(newAuthor)
      .then(res => {
        let newId = res.data.id;
        const updateAuthor = {
          firstName: 'Go Ten',
          lastName: 'Son',
          status: 'updated'
        };
        AuthorService.updateAuthor(newId, updateAuthor)
          .then(
            AuthorService.getAuthorById(newId)
              .then(res => {
                expect(res.data.status).toBe('updated');
                expect(res.data.firstName).toBe('Go Ten');
              })
              .then(done, done)
          );
      });
  });

  xit("delete an Author", (done) => {
    const newAuthor = {
      firstName: 'Lit',
      lastName: 'Ka'
    };

    AuthorService.addAuthor(newAuthor)
      .then(res => {
        let newId = res.data.id;
        AuthorService.deleteAuthor(newId)
          .then(res => {
              expect(res.status).toBe(200);
            })
          .then(done, done);
      });
  });

  xit("get all Courses", (done) => {
    CourseService.getAllCourses()
      .then(res => {
        expect(res.data.length).toBeGreaterThan(0);
      })
      .then(done, done);
  });

  xit("add new an Courses", (done) => {
    const newCourse = {
      title: "Dragon Balls",
      category: "Adventure",
      length: 100
    };

    CourseService.addCourse(newCourse)
      .then(res => {
        let newId = res.data.id;
        CourseService.getCourseById(newId)
          .then(res => {
            expect(res.data.title).toEqual("Dragon Balls");
          })
          .then(done, done);
      });

  });

  xit("update an Course", (done) => {
    const newCourse = {
      title: "Doraemon",
      category: "cartoon",
      length: 200
    };

    CourseService.addCourse(newCourse)
      .then(res => {
        let newId = res.data.id;
        const updateCourse = {
          title: 'Pokemon',
          category: 'Adventure',
          status: 'updated'
        };
        CourseService.updateCourse(newId, updateCourse)
          .then(
            CourseService.getCourseById(newId)
              .then(res => {
                expect(res.data.status).toBe('updated');
                expect(res.data.title).toBe('Pokemon');
              })
              .then(done, done)
          );
      });
  });

  xit("delete an Course", (done) => {
    const newCourse = {
      title: 'Yugi',
      category: 'legend',
      length: 300
    };

    CourseService.addCourse(newCourse)
      .then(res => {
        let newId = res.data.id;
        CourseService.deleteCourse(newId)
          .then(res => {
            expect(res.status).toBe(200);
          })
          .then(done, done);
      });
  });
});

