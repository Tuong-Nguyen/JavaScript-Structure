/**
 * Created by nttao on 8/14/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Hidden from 'material-ui/Hidden';
import Paper from 'material-ui/Paper';

storiesOf("Material-ui.Hidden", module)
  .add("Hidden Up", ()=>(
    <div>
      <Hidden xsUp>
        <Paper>xsUp</Paper>
      </Hidden>
      <Hidden smUp>
        <Paper>smUp</Paper>
      </Hidden>
      <Hidden mdUp>
        <Paper>mdUp</Paper>
      </Hidden>
      <Hidden lgUp>
        <Paper>lgUp</Paper>
      </Hidden>
      <Hidden xlUp>
        <Paper>xlUp</Paper>
      </Hidden>
    </div>
  ))
  .add("Hidden Down", ()=>(
    <div>
      <Hidden xsDown>
        <Paper>xsDown</Paper>
      </Hidden>
      <Hidden smDown>
        <Paper>smDown</Paper>
      </Hidden>
      <Hidden mdDown>
        <Paper>mdDown</Paper>
      </Hidden>
      <Hidden lgDown>
        <Paper>lgDown</Paper>
      </Hidden>
      <Hidden xlDown>
        <Paper>xlDown</Paper>
      </Hidden>
    </div>
  ));
