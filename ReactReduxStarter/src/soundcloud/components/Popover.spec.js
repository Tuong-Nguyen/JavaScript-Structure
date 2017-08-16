import React from 'react';
import { createShallow, getClasses } from 'material-ui/test-utils';

import Popover, { styleSheet } from './Popover';

describe('Popover', () => {
  let shallow, classes;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(styleSheet);
  });

  describe('#render', () => {
    test('is a div rendered with root and custom class name', () => {
      const wrapper = shallow(<Popover className="test-class"/>);
      expect(wrapper.is('div')).toBe(true);
      expect(wrapper.hasClass(classes.root)).toBe(true);
      expect(wrapper.hasClass('test-class')).toBe(true);
    });

    test('has a div for display avatar popover toggle button', () => {
      const wrapper = shallow(<Popover/>);
      expect(wrapper.find(`.${classes.toggle}`)).toHaveLength(1);
    });

    test('has a element to display avatar image', () => {
      const wrapper = shallow(<Popover/>);
      expect(wrapper.find(`.${classes.avatar}`)).toHaveLength(1);
    });

    test('has a chevron indicator, which is a FontAwesome icon', () => {
      const wrapper = shallow(<Popover />);
      expect(wrapper.find(`.${classes.chevron}`)).toHaveLength(1);
    });
  });

  describe('popover state', () => {
    test('has popover state initialize to false', () => {
      const wrapper = shallow(<Popover />);
      expect(wrapper.state().popover).toBe(false);
    });

    test('when popover is false, do not render popup', () => {
      const wrapper = shallow(<Popover/>);
      expect(wrapper.find(`.${classes.popup}`)).toHaveLength(0);
    });

    test('when popover is true, render popup', () => {
      const wrapper = shallow(<Popover/>);
      wrapper.setState({ popover: true });
      expect(wrapper.find(`.${classes.popup}`)).toHaveLength(1);
    });
  });
});