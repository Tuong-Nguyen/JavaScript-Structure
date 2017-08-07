/**
 * Created by nctuong on 7/26/2017.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddAlert from 'material-ui-icons/AddAlert';
import Add from 'material-ui-icons/Add';
import { red, purple, grey } from 'material-ui/colors';

const white = grey[100];

storiesOf('materialUI.Button', module)
  .add('Flat button with UPPERCASE TEXT', () => (
    <Button>Hello world</Button>
  ))
  .add('Primary raised button', () => (
    <Button raised classes={{
      // TODO: color purple not working, please make it work or use primary color
      color: purple
    }}>
      Primary
    </Button>
  ))
  .add('Diable raised button', () => (
    // TODO: color does not effect with disabled button
    <Button raised color="accent" disabled>
      Disabled
    </Button>
  ))
  .add('Floating button', () => (
    <Button fab color="primary">
      <Add/>
    </Button>
  ))
  .add('Icon button', () => (
    <IconButton>
      <AddAlert/>
    </IconButton>
  ))
  .add('Link button', () => (
    // TODO: add more state for link button: open url in new tab
    <Button href="https://material-ui-1dab0.firebaseapp.com/component-demos/buttons#flat-buttons">
      Link
    </Button>
  ));
