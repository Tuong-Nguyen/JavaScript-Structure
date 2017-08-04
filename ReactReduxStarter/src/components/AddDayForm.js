import React, { PropTypes, Component } from 'react';

const tahoeResorts = [
  "A10",
  "A11",
  "A12",
  "A13",
  "A14",
  "A15",
  "A16",
  "A17",
  "A18",
  "A19",
  "A20"
];

class AutoComplete extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.props.onChange.bind(this);
  }

  render() {
    return (
      <div>
        <input ref={this.onChange}
               type="text"
               list="tahoe-resorts"/>
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
  options: PropTypes.options
};

 export default class AddDayForm extends Component {
  constructor(props) {
    super(props);
    //this.setResort = this.setResort.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setPowder = this.setPowder.bind(this);
    this.setBackCountry = this.setBackCountry.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.onNewDay({
      resort: this._resort.value,
      date: this._date.value,
      powder: this._powder.checked,
      backcountry: this._backcountry.checked
    });
    this._resort.value = '',
    this._date.value = '',
    this._powder.checked = false,
    this._backcountry.checked = false;
  }

  onChange(value) {
    this._resort = value;
  }

  //Set value for props
  // setResort(value) {
  //   this._resort = value;
  // }
  //
  // getResort() {
  //   return this._resort.value
  // }

  setDate(value) {
    this._date = value;
  }

  setPowder(value) {
    this._powder = value;
  }

  setBackCountry(value) {
    this._backcountry = value;
  }

  render() {
    const { resort, date, powder, backcountry } = this.props;

    return (
      <form onSubmit={(e) => this.submit(e)}  className="add-day">
        <label htmlFor="resort">Resort Name</label>
        <AutoComplete options={tahoeResorts}
                      onChange={value => this.onChange(value)}
        />

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          required
          defaultValue={date}
          ref={this.setDate}
        />
        <div>
          <input
            id="powder"
            type="checkbox"
            defaultChecked={powder}
            ref={this.setPowder}
          />
          <label htmlFor="powder">Powder day</label>
        </div>

        <div>
          <input
            id="backcountry"
            type="checkbox"
            defaultChecked={backcountry}
            ref={this.setBackCountry}
          />
          <label htmlFor="backcountry">Backcountry day</label>
        </div>
        <button>Add day</button>
      </form>
    );
  }
}

AddDayForm.defaultProps = {
  resort: "THANH",
  date: '2017-01-08',
  powder: true,
  backcountry: false
};

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired,
  onNewDay: PropTypes.func.isRequired
};
