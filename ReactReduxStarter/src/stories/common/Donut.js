/**
 * Created by lnthao on 7/28/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme, createStyleSheet, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {Motion, spring} from 'react-motion';


// 1. We define the styles.
const styleSheet = createStyleSheet(theme => ({
  root: {
    color: 'inherit'
  },
  primary: {
    color: theme.palette.primary[500]
  }
}));

class Donut extends Component {
  state = {
    percent: 0,
    colorDefault: 'grey',
    color: 'blue'
  };

  componentDidMount(){
    const colorPalette = this.props.theme.palette;
    const donutColor = this.props.percent > 25 ? (this.props.percent > 50 ? colorPalette.error[400] : colorPalette.accent[400])
                                                : colorPalette.primary[400];
    console.log('componentDidMount ---- ' + this.props.percent);
    this.setState((state) => ({
      percent: this.props.percent,
      colorDefault: colorPalette.grey[200],
      color: donutColor
    }))
  }

  render() {
    console.log('render --- ' + this.state.percent);
    return (
      <Grid item xs={6} sm={3}>
        <Motion style={{slicePercent: spring(this.state.percent, {stiffness: 70, damping: 30})}}>
          {
            ({slicePercent}) =>
              <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
                <circle class="donut-ring" cx="21" cy="21" r="15" fill="transparent" stroke={this.state.colorDefault}
                        strokeWidth="5"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15" fill="transparent"
                        stroke={this.state.color} strokeWidth="5"
                        strokeDasharray={slicePercent + ' ' + (100 - slicePercent)}
                        strokeDashoffset="25"></circle>
                <text x="50%" y="55%" textAnchor="middle" fontSize={8} fill="grey">{(Math.round(slicePercent))}%</text>
              </svg>
          }
        </Motion>
      </Grid>
    );
  }
}

Donut.defaultProps = {
  percent: 50
};

Donut.propTypes = {
  percent: PropTypes.number
};

// 2. We inject the styles.
export default withTheme(Donut);

