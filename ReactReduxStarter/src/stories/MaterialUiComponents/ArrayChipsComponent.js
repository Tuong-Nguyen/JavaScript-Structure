/**
 * Created by nttao on 8/7/2017.
 */
import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

// TODO: move this class to other file, ex: in MaterialUiComponents folder.
export default class ArrayChips extends React.Component{
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
