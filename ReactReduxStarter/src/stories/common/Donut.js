/**
 * Created by lnthao on 7/28/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme, createStyleSheet, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';


// 1. We define the styles.
const styleSheet = createStyleSheet(theme => ({
  root: {
    color: 'inherit'
  },
  primary: {
    color: theme.palette.primary[500]
  }
}));

function Donut(props) {
  const { variant, theme } = props;
  console.log(variant);
  return (
     <Grid item xs={6} sm={3}>
       <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
         <circle class="donut-ring" cx="21" cy="21" r="15" fill="transparent" stroke={theme.palette.primary[200]} strokeWidth="5"></circle>
         <circle class="donut-segment" cx="21" cy="21" r="15" fill="transparent" stroke={theme.palette.primary[500]} strokeWidth="5" strokeDasharray="85 15" strokeDashoffset="25"></circle>
       </svg>
    </Grid>
  );
}

Donut.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary'])
};

// 2. We inject the styles.
export default withTheme(Donut);

