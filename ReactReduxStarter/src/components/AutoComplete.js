import React, { Component, PropTypes } from 'react';

export class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }

  getValue(){
    let value = this.refs.inputResort.value;
    this.props.onChange(value);
  }
  render() {
    return (
      <div>
        <input ref="inputResort"
               type="text"
               list="tahoe-resorts"
               onChange={this.getValue}/>
        <datalist id="tahoe-resorts">
          {this.props.options.map(
            (opt, i) =>
              <option key={i}>
                {opt}
              </option>
          )}
        </datalist>
      </div>
    );
  }
}

AutoComplete.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array
};
