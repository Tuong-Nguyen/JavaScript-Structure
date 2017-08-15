/**
 * Created by nttao on 8/2/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import Autocomplet from './AutocompleteTextField';
const arr = [1,2,3,4,5];
const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
];


const styleSheet = createStyleSheet({
  container:{
    marginLeft:10,
    marginTop:20,
    backgroundColor: "#F5F5F5"
  },
  inputField: {
    margin:20
  }
});

class InputFields extends React.Component{
  constructor(){
    super();
    this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: 0,
      name: 'tao'
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
  render(){
    const classes = this.props.classes;
    return(
      <div className={classes.container}>
        <TextField label="name" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} className={classes.inputField}/>
        <TextField label="name" defaultValue="" className={classes.inputField}/>
        <TextField label="name" defaultValue="" className={classes.inputField}/>
        <Autocomplet arrData={suggestions} label="Country"/>
        <TextField label="name" value={arr[this.state.selectedIndex]} className={classes.inputField}
                   aria-haspopup="true"
                   aria-controls="tasksMenu"
                   onClick={this.handleOpen}/>

        <Menu
          id="tasksMenu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleOpen}
        >
          {arr.map((item, index) =>(
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
InputFields.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styleSheet)(InputFields);
