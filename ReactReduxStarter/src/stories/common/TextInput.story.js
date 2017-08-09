import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from '../../components/common/TextInput';

storiesOf('Text Input', module)
  .add('Check Text Input with all props', () => (
    <TextInput
      name="TestTextInput"
      label="Test"
      onChange={() => {}}
      value=""
      placeholder="Please input vlaue"
      error="show error"/>
  ))

  .add('Check Text Input with not exists error', () => (
    <TextInput
      name="TestTextInput"
      label="Test"
      onChange={() => {}}
      value=""
      placeholder="Please input vlaue"/>
  ))

  .add('Check Text Input with missing require props', () => (
    <TextInput
      onChange={() => {}}
      value=""
      placeholder="Please input vlaue"/>
  ));
