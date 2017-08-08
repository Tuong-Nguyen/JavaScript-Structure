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
    percent: 0
  };

  componentDidMount(){
    this.setState((state) => ({ percent: 85 }))
  }

  render() {
    const {variant, theme} = this.props;
    console.log(variant);

    return (
      <Grid item xs={6} sm={3}>
        <Motion style={{percent: spring(this.state.percent, {stiffness: 70, damping: 30})}}>
          {
            ({percent}) =>
              <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
                <circle class="donut-ring" cx="21" cy="21" r="15" fill="transparent" stroke={theme.palette.primary[200]}
                        strokeWidth="5"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15" fill="transparent"
                        stroke={theme.palette.primary[500]} strokeWidth="5"
                        strokeDasharray={percent + ' ' + (100 - percent)}
                        strokeDashoffset="25"></circle>
              </svg>
          }
        </Motion>
      </Grid>
    );
  }
}


Donut.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary'])
};

// 2. We inject the styles.
export default withTheme(Donut);

