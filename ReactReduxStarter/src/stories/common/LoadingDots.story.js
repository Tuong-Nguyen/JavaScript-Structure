import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingDots from '../../components/common/LoadingDots';

storiesOf('Loading dot in page', module)
  .add('Loading with dot number = 5 and interval = 200', () => (
    <LoadingDots dots={5} interval={200}/>
  ))

  .add('Loading with dot number = 0 and interval = 0', () => (
    <LoadingDots dots={0} interval={0}/>
  ));


