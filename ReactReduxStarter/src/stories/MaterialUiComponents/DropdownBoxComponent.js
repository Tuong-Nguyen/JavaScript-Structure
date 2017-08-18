/**
 * Created by nttao on 8/15/2017.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {withStyles, createStyleSheet,withTheme} from 'material-ui/styles';
import Input from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

const styleSheet = createStyleSheet({
  dropdownBox: {
    position: "absolute",
    zIndex:100
  },
  inputTextField:{
    padding: "7px 0",
    border: 'none',
    fontSize:16,
    outline: 'none'
  },
  inputComponent:{
    flex:1,
    display: "flex",
    borderBottom: "1px solid #000000",
    height:32,
    float: "left",
    marginTop: 3,
    '&:hover': {
      borderBottom: "2px solid #000000"
    },
    '&:focus': {
      borderBottom: "2px solid #0000ff"
    }
  }
});

class DropdownBox extends React.Component{
  constructor() {
    super();
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(event, value){
    this.props.onSelect(value);
  }
  render(){
    const {classes, data, open, anchorEl} = this.props;
    let x = 0;
    let y = 0;
    let width = 100;
    if(anchorEl != undefined){
      x = anchorEl.offsetLeft;
      y = anchorEl.offsetTop + anchorEl.offsetHeight+ 3;
      width = anchorEl.offsetWidth;
    }
    return(
      <div>
        {open == true?
        <div style={{position: 'absolute', left: x, top: y, zIndex:100, width: width, maxHeight:150, overflowY: 'auto'}}>
          {data.map(item =>(
            <MenuItem key={item} onClick={event => this.onSelect(event, item)}>{item}</MenuItem>
          ))}
        </div>: <div/>}
      </div>
    );
  }
}
const arr= [1,2,3,4,5];
class DropdownBoxComponent extends React.Component{
  constructor(){
    super();
    this.state={
      openDropDown: false,
      anchorEL:undefined,
      selected: undefined
    }
    this.onOpen= this.onOpen.bind(this);
    this.onClose= this.onClose.bind(this);
    this.onSelect= this.onSelect.bind(this);
  }
  onOpen(event){
    this.setState({
      openDropDown: true,
      anchorEL: event.currentTarget
    });
  }
  onClose(){
    event.preventDefault();
    this.setState({
      openDropDown: false
    });
  }
  onSelect(item){
    this.setState({
      selected: item,
      openDropDown: false
    });
  }
  render(){
    const {classes} = this.props;
    return(
      <div >

        <div onClick={this.onOpen} className={classes.inputComponent}>
          <input className={classes.inputTextField} value={this.state.selected} onBlur={this.onClose}/>
          <ArrowDropDown style={{marginTop:5, marginLeft:-3}}/>
        </div>
        <DropdownBox classes={classes} data={arr}
                     open={this.state.openDropDown}
                     anchorEl={this.state.anchorEL}
                     onSelect={this.onSelect} />
      </div>
    );
  }
}

DropdownBox.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  anchorEl: PropTypes.object.isRequired
};
DropdownBoxComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(DropdownBoxComponent);


//<Input onClick={this.onOpen} value={this.state.selected} onBlur={this.onClose}/>
//<ArrowDropDown/>
