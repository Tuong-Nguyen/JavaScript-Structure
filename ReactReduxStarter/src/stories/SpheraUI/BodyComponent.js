/**
 * Created by nttao on 8/2/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import PaperComponent from './PaperComponent'
import Grid from 'material-ui/Grid';
import InputFields from './InputFieldsComponent';

const styleSheet = createStyleSheet({
  root: {
    width: '100%'
  },
  menuBar:{
    margin:10,
    height: '100%',
    borderRight: '2px'
  }
});
class Body extends React.Component{
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div>
        <Grid container>
          <Grid sm={8} xs={12}>
            <div style={{marginLeft:10}}>
              <PaperComponent/>
              <PaperComponent/>
            </div>
          </Grid>
          <Grid sm={4} xs={12}>
            <InputFields/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Body.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styleSheet)(Body);
