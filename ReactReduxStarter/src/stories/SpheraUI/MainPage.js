/**
 * Created by nttao on 8/1/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderComponent';
import Body from  './BodyComponent';
import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import {MenuContent} from './MenuBar'

export default class MainPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Hidden mdUp>
          <div>
            <Header/>
            <Body/>
          </div>
        </Hidden>
        <Hidden smDown>
          <Grid container>
            <Grid md={2}>
              <MenuContent/>
            </Grid>
            <Grid md={10}>
              <Header/>
              <Body/>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    );
  }
}
MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};
