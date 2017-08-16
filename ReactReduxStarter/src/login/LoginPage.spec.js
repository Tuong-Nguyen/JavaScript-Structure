import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import { shallow } from 'enzyme';
import { Button } from 'material-ui';

import ConnectedLogin, { LoginPage } from './LoginPage';

describe('Login', () => {
  it('should call root handler when click root button', () => {
    const loginHandler = jest.fn();
    const wrapper = shallow(<Login onLogin={loginHandler} />).dive();
    const button = wrapper.find(Button).first();
    button.simulate('click');
    expect(loginHandler).toBeCalled();
  });
});