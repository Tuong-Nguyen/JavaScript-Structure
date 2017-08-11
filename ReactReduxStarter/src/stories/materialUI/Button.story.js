/**
 * Created by nctuong on 7/26/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddAlert from 'material-ui-icons/AddAlert';
import Add from 'material-ui-icons/Add';

storiesOf('materialUI.Button', module)
  .add('Primary raised button', withInfo("Info")(() => (
    <Button raised color="primary">
      Primary
    </Button>
  )))
  .add('Diable raised button', withInfo("Info")(() => (
    <Button raised disabled>
      Disabled
    </Button>
  )))
  .add('Flat button',  withInfo("Info")(() => (
    <Button flat color="primary" >
      Flat Button
    </Button>
  )))
  .add('Disable Flat button',  withInfo("Info")(() => (
    <Button flat disabled>
      Flat Button
    </Button>
  )))
  .add('Floating button',  withInfo("Info")(() => (
    <Button fab color="accent">
      <Add/>
    </Button>
  )))
  .add('Icon button',  withInfo("Info")(() => (
    <IconButton>
      <AddAlert/>
    </IconButton>
  )))
  .add('Link button',  withInfo("Info")(() => (
    // TODO: add more state for link button: open url in new tab
    <Button href="https://material-ui-1dab0.firebaseapp.com/component-demos/buttons#flat-buttons">
      Link
    </Button>
  )));
