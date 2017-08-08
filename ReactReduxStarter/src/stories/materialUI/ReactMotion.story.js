/**
 * Created by lnthao on 8/8/2017.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import ListAndButtonWithMotion from './../../components/common/ListAndButtonWithMotion';

storiesOf("React Motion", module)
  .add('List and Button with motion', () => (
    <ListAndButtonWithMotion />
))
