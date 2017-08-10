/**
 * Created by nttao on 8/8/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import GridComponent from './../MaterialUiComponents/GridComponent';

storiesOf('Material-ui.Grid', module)
  .add('Simple Grid', ()=>(
    <Grid container>
      <Grid xs={12}>
        <div style={{backgroundColor: "#ff3a45"}} >
          <span>12</span>
        </div>
      </Grid>
      <Grid xs={8}>
        <div style={{backgroundColor: "#86ffaf"}} >
          <span>8</span>
        </div>
      </Grid>
      <Grid xs={4}>
        <div style={{backgroundColor: "#123fff"}} >
          <span>4</span>
        </div>
      </Grid>
    </Grid>
  ))
  .add('Fullwidth Grid', ()=>(
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <Paper>xs=12</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper>xs=12 sm=6</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper>xs=12 sm=6</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </Grid>
  </Grid>
  ))
  .add('Centered Grid', ()=>(
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper>xs=12</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>xs=12</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>xs=12</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>xs=6</Paper>
      </Grid>
    </Grid>
  ))
  .add('Custom Grid', ()=>(
    <GridComponent/>
  ));
