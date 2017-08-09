import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './index';

storiesOf('Header.Logo', module)
  .add('Dribbble logo, color change to grey(#424242) when hover', () => (
      <div style={{backgroundColor: '#424242', width: '100%', height: '100%', textAlign: 'center'}}>
        <Logo />
      </div>
    )
  );