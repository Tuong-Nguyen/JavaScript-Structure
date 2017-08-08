/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react'
import Tabs, {Tab} from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';

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

export class ScrollTabsComponent extends React.Component{
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
        <Tabs index={this.state.tabIndex} onChange={this.onTabChange} scrollable scrollButtons="on">
          <Tab label="Tab1">
          </Tab>
          <Tab label="Tab2">
          </Tab>
          <Tab label="Tab3">
          </Tab>
          <Tab label="Tab4">
          </Tab>
          <Tab label="Tab5">
          </Tab>
          <Tab label="Tab6">
          </Tab>
          <Tab label="Tab7">
          </Tab>
          <Tab label="Tab8">
          </Tab>
          <Tab label="Tab9">
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
        {this.state.tabIndex === 3 &&
        <TabContainer>
          {'Item One'}
        </TabContainer>}
        {this.state.tabIndex === 4 &&
        <TabContainer>
          {'Item Two'}
        </TabContainer>}
        {this.state.tabIndex === 5 &&
        <TabContainer>
          {'Item Three'}
        </TabContainer>}
        {this.state.tabIndex === 6 &&
        <TabContainer>
          {'Item One'}
        </TabContainer>}
        {this.state.tabIndex === 7 &&
        <TabContainer>
          {'Item Two'}
        </TabContainer>}
        {this.state.tabIndex === 8 &&
        <TabContainer>
          {'Item Three'}
        </TabContainer>}
      </div>
    );
  }
}

export  class IconTabsComponent extends React.Component{
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
          <Tab icon={<PhoneIcon />}>
          </Tab>
          <Tab icon={<FavoriteIcon />}>
          </Tab>
          <Tab icon={<PersonPinIcon />}>
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
export  class IconWithTextTabsComponent extends React.Component{
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
          <Tab label="Phone" icon={<PhoneIcon />}>
          </Tab>
          <Tab label="Favorition" icon={<FavoriteIcon />}>
          </Tab>
          <Tab label="Persion" icon={<PersonPinIcon />}>
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
export class DisableTabsComponent extends React.Component{
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
          <Tab label="Phone" >
          </Tab>
          <Tab label="Diable" disabled >
          </Tab>
          <Tab label="Persion" >
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
