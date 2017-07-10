/**
 * Created by QuanLe on 7/11/2017.
 */

import React, {Component, PropTypes} from 'react';

export default class Autocomplete extends Component {
  get value() {
    return this.refs.inputResort.value;
  }
  set value(inputValue){
    this.refs.inputResort.value = inputValue;
  }
  render(){
    return (
      <div>
        <input ref="inputResort" type="text" list="resorts"/>
        <datalist id="resorts">
          {this.props.options.map(
            (opt, i) => <option key={i}>{opt}</option>
          )}
        </datalist>
      </div>
    );
  }
}

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string)
};
