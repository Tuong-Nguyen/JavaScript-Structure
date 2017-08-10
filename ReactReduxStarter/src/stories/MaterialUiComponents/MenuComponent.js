/**
 * Created by nttao on 8/10/2017.
 */
import React from 'react';
import Menu, {MenuItem} from 'material-ui/Menu';
import TextField from 'material-ui/TextField';

const arr= [1,3,5,7,9];
export default class MenuComponent extends React.Component{
  constructor(){
    super();
    this.state={
      anchorEl: undefined,
      open: false,
      selectedIndex: 0
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }
  handleOpen(event) {
    var status = !this.state.open;
    this.setState({ open: status, anchorEl: event.currentTarget });
  }

  handleMenuItemClick(event, index){
    this.setState({ selectedIndex: index, open: false });

  }
  render() {
    return(
      <div>
        <TextField label="name" value={arr[this.state.selectedIndex]}
                   aria-haspopup="true"
                   aria-controls="tasksMenu"
                   onClick={this.handleOpen}/>
        <Menu
          id="tasksMenu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleOpen}
        >
          {arr.map((item, index) => (
            <MenuItem key={item}
                      selected={index === this.state.selectedIndex}
                      onClick={event => this.handleMenuItemClick(event, index)}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}
