/* eslint-disable import/namespace */
/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react';
import {storiesOf, action} from '@storybook/react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';
import grey from 'material-ui/colors/grey';
// eslint-disable-next-line import/namespace
import avata from './../resources/avata.jpg';

// TODO: remove unused variable styleSheet
const styleSheet = createStyleSheet('Chips', theme => ({
  chip: {
    margin: theme.spacing.unit
  },
  svgIcon: {
    color: grey[800]
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}));
function handleRequestDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function AvataChip1(props) {
  return (
    <Chip
      avatar={<Avatar>MB</Avatar>}
      label="Clickable Chip"
      onClick={handleClick}
    />
  );
}
function AvataChip2(props) {
  return (
    <Chip
      avatar={<Avatar src={avata} />}
      label="Deletable Chip"
      onRequestDelete={handleRequestDelete}
    />
  );
}

// TODO: move this class to other file, ex: in MaterialUiComponents folder.
class ArrayChips extends React.Component{
  constructor(){
    super();
    this.state={chipData: [
      { key: 0, label: 'Angular' },
      { key: 1, label: 'JQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'ReactJS' },
      { key: 4, label: 'Vue.js' }]
    }
    this.handleRequestDelete= this.handleRequestDelete.bind(this);
  }
  handleRequestDelete(event, index){
    let arraty = this.state.chipData;
    arraty.splice(index,1);
    this.setState({chipData: arraty});
  }
  render() {
    return (
      <div className="row">
        {this.state.chipData.map(item =>{
          return(<Chip
            label={item.label}
            index={item.key}
            onRequestDelete={this.handleRequestDelete}
          />);
        })}
      </div>
    );
  }
}

storiesOf("material-ui.Chips", module)
  .add("Text Chip", ()=>(
    <Chip label="Text Chip"
      onClick={action("clicked")}>
    </Chip>
  )).add("Text Avata Chip", ()=>(
    <AvataChip1/>
  )).add("Image Avata Chip", ()=>(
    <AvataChip2/>
  )).add("Chip Array", ()=>(
    <ArrayChips/>
));

