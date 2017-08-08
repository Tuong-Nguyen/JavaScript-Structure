/**
 * Created by nttao on 8/8/2017.
 */
import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Switch from 'material-ui/Switch';

const styleSheet = createStyleSheet({
  bar: {},
  checked: {
    color: green[500],
    '& + $bar': {
      backgroundColor: green[500]
    }
  }
})

class SwitchComponent extends React.Component{
  render(){
    const classes = this.props.classes;
    return(
      <Switch classes={{checked: classes.checked,
                        bar: classes.bar}}/>
    );
  }
}

export default withStyles(styleSheet)(SwitchComponent)
