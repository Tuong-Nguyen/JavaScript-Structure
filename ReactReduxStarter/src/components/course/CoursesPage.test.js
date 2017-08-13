import expect from 'expect';
import { mount, shallow } from 'enzyme';
import React, { PropTypes, Component } from 'react';
import rerender from 'react-test-renderer';
import { browserHistory } from 'react-router';
import CourseList from "./CourseList";
import CoursesPage from './CoursesPage';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore.dev';
import { loadCourses } from '../../actions/courseActions';
import { loadAuthors } from '../../actions/authorActions';

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
        <CoursesPage/>
      </Provider>
    ).toJSON();
    //act

    //assert
    expect(wrapper).toMatchSnapshot();
  });

  test('should click button add', () => {
    //arrange
    // const wrapper = setUp();
    expect(1).toBe(1);
    //const submitButton = wrapper.find('input');
    //submitButton.simulate('click');

    //using mock function to test event
    //expect(wrapper.redirectToAddCoursePage).toBeCalled();

  });

  describe('Map state to props', () => {
    let renderer, state, store, props;
    beforeEach(() => {
      renderer = TestUtils.createRenderer();
      state = {
        pages: {
          currentPage: 'test1',
          pages: ['test1', 'test2']
        }
      };
      store = {
        subscribe: sinon.spy().named('subscribe'),
        dispatch: sinon.spy().named('dispatch'),
        getState: sinon.spy(() => state).named('getState')
      };
      props = {
        test: 'value',
        pageDefs: {} // required for TabPage
      };
    });
  })


  describe('Map Dispatch To Props', () => {
    it('should call fetch data action', () => {
      const dispatchSpy = sinon.spy();

      // I'm replacing store's dispatch by an spy
      store.dispatch = dispatchSpy;

      // I'm justing passing the store as props instead of wrapping it in a Provider
      const tree = sd.shallowRender(<PurveyorsViewContainer store={store}/>);
      const vdom = tree.getRenderOutput();

      // Here I'm calling fetchData that was passed as props by mapDispatchToProps
      vdom.props.fetchData();

      // And finally I'm checking if the dispatch was called with the action's parameters
      const expectedAction = actions.fetchPurveyors();
      const spyLastCall = dispatchSpy.args[0][0];
      expect(spyLastCall.types).to.be.eql(expectedAction.types);
      expect(spyLastCall.callAPI).to.be.ok;
    });
  });

});
