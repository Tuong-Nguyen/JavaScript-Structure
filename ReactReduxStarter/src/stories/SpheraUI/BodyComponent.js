/**
 * Created by nttao on 8/2/2017.
 */
import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import PaperComponent from './PaperComponent'
import Grid from 'material-ui/Grid';
import InputFields from './InputFieldsComponent';

const styleSheet = createStyleSheet({
  root: {
    width: '100%'
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
          <Grid xs="8">
            <PaperComponent/>
          </Grid>
          <Grid xs="4">
            <InputFields/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styleSheet)(Body);
