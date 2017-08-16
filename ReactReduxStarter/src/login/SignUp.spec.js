import React from 'react';
import { mount } from 'enzyme';
import { Button } from 'material-ui';
import AddIcon from 'material-ui-icons/Add';

import SignUp from './SignUp';

describe('SignUp', () => {
  describe('add new account button', () => {
    test('is a FloatingActionButton with + icon', () => {
      const wrapper = mount(<SignUp />);
      const buttonWrapper = wrapper.find(Button).first();
      expect().toHaveLength(1);
      expect(buttonWrapper.props().fab).toBeDefined();
      expect(buttonWrapper.props().children). toBe(AddIcon);
    });
  });
});