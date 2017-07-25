/**
 * Created by nkim on 7/25/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingDots from '../../components/common/LoadingDots';

storiesOf('Loading dots', module)
  .add('default view', () => (
    <LoadingDots interval="100"
                 dots="1" ></LoadingDots>
  ));
