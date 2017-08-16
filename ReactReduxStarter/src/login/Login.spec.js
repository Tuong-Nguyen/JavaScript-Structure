import React from 'react';
import { createShallow, getClasses } from 'material-ui/test-utils';
import { Typography, Button } from 'material-ui';

import UserInputField from './UserInputField';
import Login, { styleSheet } from './Login';

describe('Login', () => {
  let shallow;
  let classes;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(styleSheet);
  });

  describe('render', () => {
    test('should be a div', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.is('div')).toBe(true);
    });

    test('should render div with root class', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.hasClass(classes.root)).toBe(true);
    });

    test('should has a Typography', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find(Typography)).toHaveLength(1);
    });

    test('should render Typography with title class', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find(Typography).hasClass(classes.title)).toBe(true);
    });

    test('should render two UserInputField', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find(UserInputField)).toHaveLength(2);
    });

    test('should render a button with loginButton class', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find(Button)).toHaveLength(1);
      expect(wrapper.find(Button).hasClass(classes.loginButton)).toBe(true);
    });

    test('should render a link display Forgot your password?', () => {
      const wrapper = shallow(<Login />);

    });
  });
});