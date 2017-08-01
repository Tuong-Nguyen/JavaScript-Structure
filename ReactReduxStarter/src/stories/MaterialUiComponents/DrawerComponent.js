/**
 * Created by nttao on 7/26/2017.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import {MaterialList} from './ListComponent';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui-icons/Menu';


export default class MaterialDrawer extends React.Component{
  constructor(props){
    super(props);
    this.state = {open: false};
    this.menuCLick = this.menuCLick.bind(this);
  }
  menuCLick(){
    var status = !this.state.open;
    this.setState({open: status});
  }
  render(){
    return (<div>
      <IconButton onClick={this.menuCLick}>
        <Menu/>
      </IconButton>
      <Drawer
        anchor={this.props.anchor}
        open={this.state.open}
        onClick={this.menuCLick}
         >
        <MaterialList/>
      </Drawer>
    </div>);
  }
}
