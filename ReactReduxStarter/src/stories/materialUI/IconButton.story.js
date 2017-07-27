/**
 * Created by nttao on 7/26/2017.
 */
/**
 * Created by nttao on 7/26/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import AddAlert from 'material-ui-icons/AddAlert';
import * as colors from 'material-ui/colors';

storiesOf('material-ui.Icon.Button', module)
  .add(
    'Icon button', ()=>(
      <IconButton color="">
        <AddAlert/>
      </IconButton>
    ));
