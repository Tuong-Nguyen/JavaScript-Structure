/**
 * Created by lnthao on 7/28/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme, createStyleSheet, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {Motion, spring} from 'react-motion';

const Donut = ({percent, theme}) => {
  const colorPalette = theme.palette;
  const donutColor = percent > 25 ? (percent > 50 ? colorPalette.error[400] : colorPalette.accent[400])
    : colorPalette.primary[400];
  console.log('render --- ' + percent);
  return (
    <Grid item xs={6} sm={3}>
      <Motion defaultStyle={{slicePercent: 0}} style={{slicePercent: spring(percent, {stiffness: 70, damping: 30})}}>
        {
          ({slicePercent}) =>
            <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
              <circle class="donut-ring" cx="21" cy="21" r="15" fill="transparent" stroke={colorPalette.grey[200]}
                      strokeWidth="5"></circle>
              <circle class="donut-segment" cx="21" cy="21" r="15" fill="transparent"
                      stroke={donutColor} strokeWidth="5"
                      strokeDasharray={slicePercent + ' ' + (100 - slicePercent)}
                      strokeDashoffset="25"></circle>
              <text x="50%" y="55%" textAnchor="middle" fontSize={8} fill="grey">{(Math.round(slicePercent))}%</text>
            </svg>
        }
      </Motion>
    </Grid>
  );
};

Donut.defaultProps = {
  percent: 50
};

Donut.propTypes = {
  percent: PropTypes.number
};

// 2. We inject the styles.
export default withTheme(Donut);

