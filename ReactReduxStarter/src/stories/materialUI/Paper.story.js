/* eslint-disable import/namespace */
/**
 * Created by nttao on 7/27/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
// eslint-disable-next-line import/default
import img from './../resources/avata.jpg';

storiesOf("material-ui.Paper", module)
  .add("Paper", ()=>(
    <div>
      <Paper>
        <Avatar alt="avata" src={img}></Avatar>
        <Typography type="headline" component="h3">
          Name
        </Typography>
        <Typography type="body1" component="p">
          Gal Gadot
        </Typography>
      </Paper>
    </div>
  ));
