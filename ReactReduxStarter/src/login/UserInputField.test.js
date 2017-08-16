import React from 'react';
import { createShallow, getClasses } from 'material-ui/test-utils';
import { FormControl, InputLabel, Input, FormHelperText } from 'material-ui';

import UserInputField, { styleSheet } from './UserInputField';

describe('UserInputField', () => {
  let shallow;
  let classes;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(styleSheet);
  });

  describe('render', () => {
    test('should be a FormControl', () => {
      const wrapper = shallow(<UserInputField />);
      expect(wrapper.is(FormControl)).toBe(true);
    });

    test('should render FormControl with root class', () => {
      const wrapper = shallow(<UserInputField />);
      expect(wrapper.hasClass(classes.root)).toBe(true);
    });

    test('should render FormControl with custom class name', () => {
      const wrapper = shallow(<UserInputField className="test-class"/>);
      expect(wrapper.is('.test-class')).toBe(true);
      expect(wrapper.hasClass(classes.root)).toBe(true);
    });

    test('should render InputLabel as the first child', () => {
      const wrapper = shallow(<UserInputField />);
      expect(wrapper.childAt(0).is(InputLabel)).toBe(true);
    });

    test('should render InputLabel with inputLabel class', () => {
      const wrapper = shallow(<UserInputField />);
      expect(wrapper.childAt(0).hasClass(classes.inputLabel)).toBe(true);
    });

    test('should render Input as the second child', () => {
      const wrapper = shallow(<UserInputField />);
      expect(wrapper.childAt(1).is(Input)).toBe(true);
    });

    test('should render Input with input class', () => {
      const wrapper = shallow(<UserInputField />);
      expect(wrapper.childAt(1).hasClass(classes.input)).toBe(true);
    });

    test('should forward props.onChange to Input as prop', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<UserInputField onChange={onChange} />);
      const inputWrapper = wrapper.find(Input);
      expect(inputWrapper.props().onChange).toBe(onChange);
    });

    test('should render FormHelperText as the third child', () => {
      const wrapper = shallow(<UserInputField />);
      expect(wrapper.childAt(2).is(FormHelperText)).toBe(true);
    });

    test('should forward props.error to FormHelperText as children', () => {
      const error = "This field has error";
      const wrapper = shallow(<UserInputField error={error}/>);
      const helperWrapper = wrapper.find(FormHelperText).first();
      expect(helperWrapper.props().children).toBe(error);
    });
  });

  describe('when props.error is passed', () => {
    test('error message should be displayed', () => {
      const wrapper = shallow(<UserInputField error="This field has error"/>);
      const helperWrapper = wrapper.find(FormHelperText).first();
      expect(helperWrapper.props().style.visibility).toBe('visible');
    });
  });

  describe('when props.error is undefined', () => {
    test('hide error message', () => {
      const wrapper = shallow(<UserInputField />);
      const helperWrapper = wrapper.find(FormHelperText).first();
      expect(helperWrapper.props().style.visibility).toBe('hidden');
    });
  });
});