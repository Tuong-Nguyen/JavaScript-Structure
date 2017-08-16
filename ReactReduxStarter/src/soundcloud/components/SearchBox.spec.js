import React from 'react';
import { createShallow, getClasses } from 'material-ui/test-utils';

import SearchBox, { styleSheet } from './SearchBox';

describe('SearchBox', () => {
  let shallow, classes;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(styleSheet);
  });

  describe('#render', () => {
    test('is a div with root and custom class name', () => {
      const wrapper = shallow(<SearchBox className="test-class"/>);
      expect(wrapper.is('div')).toBe(true);
      expect(wrapper.hasClass(classes.root)).toBe(true);
      expect(wrapper.hasClass('test-class')).toBe(true);
    });

    test('has a input with input class', () => {
      const wrapper = shallow(<SearchBox />);
      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('input').hasClass(classes.input)).toBe(true);
    });

    test('forward props.value to input', () => {
      const wrapper = shallow(<SearchBox value="abc" />).find('input');
      expect(wrapper.props().value).toBe('abc');
    });

    test('forward props.onChange to input', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<SearchBox onChange={onChange}/>).find('input');
      expect(wrapper.props().onChange).toBe(onChange);
    });
  });

  describe('#onChange', () => {
    test('call onChange handler 1 time when input change', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<SearchBox onChange={onChange} />).find('input');
      wrapper.simulate('change');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

});