import React from 'react';
import {shallow} from 'enzyme';
import TextInput from '../../components/common/TextInput';

describe('Text Input', () => {
  test('Test UI when input props into Component', () => {

    const txtInput = shallow(
      <TextInput
        name="TestTextInput"
        label="Test"
        onChange={() => {
        }}
        value=""
        placeholder="Please input vlaue"
        error="show error"/>);
    expect(txtInput.find('label').text()).toBe('Test');
    txtInput.find('input').simulate('change');

    expect(txtInput.find('input').props().value).toBe('');


  });
});
