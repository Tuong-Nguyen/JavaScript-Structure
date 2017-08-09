import React from 'react';
import { storiesOf } from '@storybook/react';
import Account from '../../../index';

storiesOf('Header.Account', module)
  .add('Account Navigation', () => (
    <div style={{ width: 200, height: 64, backgroundColor: '#424242' }}>
      <Account />
    </div>
  ));