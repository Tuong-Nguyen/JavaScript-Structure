/**
 * Created by lnthao on 8/9/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {Motion, spring, presets} from 'react-motion';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet(theme => ({
  div: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    textAlign: 'center'
  }
}));

const DivWithPresets = ({classes}) => {
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={3}>
          <Motion defaultStyle={{h:0}} style={{h: spring(400)}}>
            {
              ({h}) => <div className={classes.div} style={{width: h}}>
                {'Default is noWobble'}
              </div>
            }
          </Motion>
        </Grid>
        <Grid item xs={3}>
          <Motion defaultStyle={{h:0}} style={{h: spring(400, presets.gentle)}}>
            {
              ({h}) => <div className={classes.div} style={{width: h}}>
                {'Gentle'}
              </div>
            }
          </Motion>
        </Grid>
        <Grid item xs={3}>
          <Motion defaultStyle={{h:0}} style={{h: spring(400, presets.wobbly)}}>
            {
              ({h}) => <div className={classes.div} style={{width: h}}>
                {'Wobbly'}
              </div>
            }
          </Motion>
        </Grid>
        <Grid item xs={3}>
          <Motion defaultStyle={{h:0}} style={{h: spring(400, presets.stiff)}}>
            {
              ({h}) => <div className={classes.div} style={{width: h}}>
                {'Stiff'}
              </div>
            }
          </Motion>
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={3}>
          <Motion defaultStyle={{h:0}} style={{h: spring(200)}}>
            {
              ({h}) => <div className={classes.div} style={{width: h}}>
                {'Default is noWobble'}
              </div>
            }
          </Motion>
        </Grid>
        <Grid item xs={3}>
          <Motion defaultStyle={{h:0}} style={{h: spring(200, presets.gentle)}}>
            {
              ({h}) => <div className={classes.div} style={{width: h}}>
                {'Gentle'}
              </div>
            }
          </Motion>
        </Grid>
        <Grid item xs={3}>
          <Motion defaultStyle={{h:0}} style={{h: spring(200, presets.wobbly)}}>
            {
              ({h}) => <div className={classes.div} style={{width: h}}>
                {'Wobbly'}
              </div>
            }
          </Motion>
        </Grid>
        <Grid item xs={3}>
          <Motion defaultStyle={{h:0}} style={{h: spring(200, presets.stiff)}}>
            {
              ({h}) => <div className={classes.div} style={{width: h}}>
                {'Stiff'}
              </div>
            }
          </Motion>
        </Grid>
      </Grid>
    </div>
  );
};

DivWithPresets.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(DivWithPresets);
