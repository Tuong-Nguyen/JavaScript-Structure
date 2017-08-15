/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react'
import PropTypes from 'prop-types';
import Tabs, {Tab} from 'material-ui/Tabs';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography, {Ty} from 'material-ui/Typography';

const TabContainer = props =>(
  <div style={{ padding: 20 }}>
    {props.children}
  </div>
);
const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper
  }
}));
TabContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default class TabsComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabIndex:0
    }
    this.onTabChange = this.onTabChange.bind(this);
  }
  onTabChange(event, index){
    this.setState({
      tabIndex:index
    })
  }
  render(){
    return(
      <div div className={styleSheet.root}>
        <Typography type="headline" component="h3">
          Actions:
        </Typography>
        <Typography type="body1">
          <Tabs index={this.state.tabIndex} onChange={this.onTabChange}>
            <Tab label="Action1">
            </Tab>
            <Tab label="Action2">
            </Tab>
          </Tabs>
          {this.state.tabIndex === 0 &&
          <TabContainer>
            {'Item One'}
          </TabContainer>}
          {this.state.tabIndex === 1 &&
          <TabContainer>
            {'Item Two'}
          </TabContainer>}
        </Typography>
      </div>
    );
  }
}
