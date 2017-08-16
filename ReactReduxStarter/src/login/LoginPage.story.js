import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoginPage } from './LoginPage';

storiesOf('Login', module)
  .add('First look', () => (
    <LoginPage />
  ))
  .add('Input username & password', () => (
    <LoginPage username="hehe" password="haha"/>
  ))
  .add('Username & Password invalid', () => (
    <LoginPage
      username="a"
      password="a"
      error={{
        username: 'Username is invalid!',
        password: 'Password is invalid!'
      }}
    />
  ))
  .add('Loading...', () => (
    <LoginPage
      username="user"
      password="user"
      loading={true}
    />
  ));