/**
 * Created by nttao on 7/26/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';

storiesOf('material-ui.Button', module)
  .add(
    'Disable button', ()=>(
      <Button raised color="accent" disabled>
        Disabled
      </Button>
    ));
