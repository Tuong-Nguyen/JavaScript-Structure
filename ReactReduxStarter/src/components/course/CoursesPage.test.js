import expect from 'expect';
import { mount, shallow } from 'enzyme';
import React, { PropTypes, Component } from 'react';
import rerender from 'react-test-renderer';
import TestUtils from 'react-addons-test-utils';
import CourseList from "./CourseList";
import CoursesPage from './CoursesPage';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore.dev';
import { loadCourses } from '../../actions/courseActions';
import { loadAuthors } from '../../actions/authorActions';
import sinon from 'sinon';
import configureStoreMock from 'redux-mock-store';

function setUp() {
  //arrange
  const store = configureStore();
  store.dispatch(loadCourses);
  store.dispatch(loadAuthors);

  const wrapper = mount(
    <Provider store={store}>
      <CoursesPage />
    </Provider>
  );
  return wrapper;
}

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

describe('Course Page', () => {
  test('Should render the container component', () => {
    //arrange
    const wrapper = setUp();
    //assert
    expect(wrapper.find(CourseList).length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Courses');
    expect(wrapper.find('input').prop('type')).toBe('submit');
    expect(wrapper.find('input').props().value).toBe('Add course');
    expect(wrapper.find('table').length).toBe(1);
  });

  test('Should match to Snapshot', () => {
    //arrange
    const store = configureStore();
    store.dispatch(loadCourses);
    store.dispatch(loadAuthors);

    const wrapper = rerender.create(
      <Provider store={store}>
        <CoursesPage />
      </Provider>
    ).toJSON();
    //act

    //assert
    expect(wrapper.toMatchSnapshot);
  });

  test('should click button add', () => {
    //arrange
    const store = configureStore();

    var spy = jest.fn();

    const wrapper = mount(
      <Provider store={store}>
        <CoursesPage />
      </Provider>
    );
    const submitButton = wrapper.find('input').first();
    submitButton.simulate('click');
    //expect(spy).toHaveBeenCalled();

    expect(submitButton.props().value).toBe('Add course');
    //expect(wrapper.redirectToAddCoursePage).toBeCalled();
    //using mock function to test event
    //expect(handleButtonClick.calledOnce).to.equal(true);

  });

  test('Map state to props when not dispatch state', () => {
    const store = configureStore();

    const wrapper = mount(
      <Provider store={store}>
        <CoursesPage />
      </Provider>
    );

    //assert

    expect(wrapper.props().store.getState().courses).toEqual([]);
    expect(wrapper.props().store.getState().authors).toEqual([]);

  });

  test('Map state to props testing', () => {
    const store = configureStore();

    const wrapper = mount(
      <Provider store={store}>
        <CoursesPage />
      </Provider>
    );

    //assert
    expect(wrapper.props().store.getState().courses).toEqual([]);
    expect(wrapper.props().store.getState().authors).toEqual([]);
  });

  test('Map state to props using mock to initial', () => {
    const mockStore = configureStoreMock();
    const dispatch = sinon.spy();

    const wrapper = mount(
      <Provider store={mockStore}>
        <CoursesPage />
      </Provider>
    );

    let a = wrapper.props().store;

  });


  // describe('Map Dispatch To Props', () => {
  //   it('should call fetch data action', () => {
  //     const dispatchSpy = sinon.spy();
  //
  //     // I'm replacing store's dispatch by an spy
  //     store.dispatch = dispatchSpy;
  //
  //     // I'm justing passing the store as props instead of wrapping it in a Provider
  //     const tree = sd.shallowRender(<PurveyorsViewContainer store={store}/>);
  //     const vdom = tree.getRenderOutput();
  //
  //     // Here I'm calling fetchData that was passed as props by mapDispatchToProps
  //     vdom.props.fetchData();
  //
  //     // And finally I'm checking if the dispatch was called with the action's parameters
  //     const expectedAction = actions.fetchPurveyors();
  //     const spyLastCall = dispatchSpy.args[0][0];
  //     expect(spyLastCall.types).to.be.eql(expectedAction.types);
  //     expect(spyLastCall.callAPI).to.be.ok;
  //   });
  // });

});
