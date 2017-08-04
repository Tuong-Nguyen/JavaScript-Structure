/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react'
import Tabs, {Tab} from 'material-ui/Tabs';

const TabContainer = props =>(
  <div style={{ padding: 20 }}>
    {props.children}
  </div>
);

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
      <div>
        <Tabs index={this.state.tabIndex} onChange={this.onTabChange}>
          <Tab label="Tab1">
          </Tab>
          <Tab label="Tab2">
          </Tab>
          <Tab label="Tab3">
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
        {this.state.tabIndex === 2 &&
        <TabContainer>
          {'Item Three'}
        </TabContainer>}
      </div>
    );
  }
}
