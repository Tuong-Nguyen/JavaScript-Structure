import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../../components/common/Header';

storiesOf('Header of Page', module)
  .add('Should loading with loading is true, show ..... ', () => (
    <Header loading />
  ))
  .add('Should loading with loading is false, not show .... ', () => (
    <Header loading={false} />
  ));
