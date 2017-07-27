/**
 * Created by nctuong on 7/26/2017.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddAlert from 'material-ui-icons/AddAlert';
import { red, purple, grey } from 'material-ui/colors';

const white = grey[100];

storiesOf('materialUI.Button', module)
  .add('Flat button with UPPERCASE TEXT', () => (
    <div>
      <div>
        <Button>Hello world</Button>
        <Button raised color={white}>
          Primary
        </Button>
        <Button raised color="accent" disabled>
          Disabled
        </Button>
        <IconButton>
          <AddAlert/>
        </IconButton>
      </div>
    </div>
  ));
