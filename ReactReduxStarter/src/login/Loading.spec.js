import React from 'react';
import { createShallow, getClasses } from 'material-ui/test-utils';
import { CircularProgress } from 'material-ui';

import Loading, { styleSheet } from './Loading';

describe('Loading', () => {
  let shallow;
  let classes;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(styleSheet);
  });

  describe('render', () => {
    test('should be a div', () => {
      const wrapper = shallow(<Loading />);
      expect(wrapper.is('div')).toBe(true);
    });

    test('should render with root class', () => {
      const wrapper = shallow(<Loading />);
      expect(wrapper.hasClass(classes.root)).toBe(true);
    });

    test('should render CircularProgress as the only child', () => {
      const wrapper = shallow(<Loading />);
      expect(wrapper.children()).toHaveLength(1);
      expect(wrapper.childAt(0).is(CircularProgress)).toBe(true);
    });

    test('should render CircularProgress with circularProgress class', () => {
      const wrapper = shallow(<Loading />);
      expect(wrapper.childAt(0).hasClass(classes.circularProgress)).toBe(true);
    });
  });

  describe('when props.loading is passed', () => {
    test('should show loading wheel if loading is true', () => {
      const wrapper = shallow(<Loading loading={true}/>);
      expect(wrapper.props().style.visibility).toBe('visible');
    });

    test('should hide loading wheel if loading is false', () => {
      const wrapper = shallow(<Loading loading={false}/>);
      expect(wrapper.props().style.visibility).toBe('hidden');
    });
  });

  describe('when props.loading is undefined', () => {
    test('should hide loading wheel', () => {
      const wrapper = shallow(<Loading/>);
      expect(wrapper.props().style.visibility).toBe('hidden');
    });
  });
});