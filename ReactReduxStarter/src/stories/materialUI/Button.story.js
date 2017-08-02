/**
 * Created by nctuong on 7/26/2017.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'material-ui/Button';

storiesOf('materialUI.Button', module)
  .add('Flat button with UPPERCASE TEXT', () => (
    <Button>Hello world</Button>
  ));
