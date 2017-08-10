/**
 * Created by nttao on 8/9/2017.
 */
import React from 'react';
import Grid from 'material-ui/Grid';
import {withStyles,createStyleSheet} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';

const styleSheet= createStyleSheet({
  container: {
    backgroundColor: "#e0e0e0",
    margin:20
  },
  content:{
    backgroundColor: "#e0e0e0",
    textAlign: "center"
  },
  row:{
    backgroundColor: "#a6ff36",
    marginTop:10
  },
  paper: {
    padding: 16,
    textAlign: 'center'
  }
});
class ResponesiveUiComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      containerWidth:"100%"
    }
  }
  onChangeContainerWidth = (event, value)=>{
    this.setState({
      containerWidth: value
    });

  }
  render(){
    const {classes} = this.props;
    const {containerWidth} = this.state;
    return(
      <Grid>
        <Grid container xs={12} style={{width: containerWidth}}>
          <span>Width: {containerWidth}</span>
          <Grid container className={classes.container} >
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={4} sm={3}>
                <Paper className={classes.paper}>xs=4 </Paper>
              </Grid>
              <Grid item xs={8} sm={9}>
                <Paper className={classes.paper}>xs=8</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.container} >
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} style={{marginTop:50}}>
          <Grid item xs={6} sm={4}>
            <FormLabel>Width</FormLabel>
            <RadioGroup
              name="containerWidth"
              aria-label="containerWidth"
              selectedValue={containerWidth}
              onChange={this.onChangeContainerWidth}
            >
              <FormControlLabel value="240px" control={<Radio />} label="240px" />
              <FormControlLabel value="480px" control={<Radio />} label="480px" />
              <FormControlLabel value="840px" control={<Radio />} label="840px" />
              <FormControlLabel value="960px" control={<Radio />} label="960px" />
              <FormControlLabel value="100%" control={<Radio />} label="100%" />
            </RadioGroup>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(ResponesiveUiComponent)
