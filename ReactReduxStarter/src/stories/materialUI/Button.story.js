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
  .add('Primary raised button', () => (
    <Button raised color="primary">
      Primary
    </Button>
  ))
  .add('Diable raised button', () => (
    <Button raised disabled>
      Disabled
    </Button>
  ))
  .add('Flat button', () => (
    <Button flat color="primary" >
      Flat Button
    </Button>
  ))
  .add('Disable Flat button', () => (
    <Button flat disabled>
      Flat Button
    </Button>
  ))
  .add('Floating button', () => (
    <Button fab color="accent">
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
