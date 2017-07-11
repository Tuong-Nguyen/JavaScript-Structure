/**
 * Created by lnthao on 6/27/2017.
 */
import React, {Component, PropTypes} from 'react';
import Autocomplete from './Autocomplete';

const resorts = [
  "Alphine Meadows",
  "Boreal",
  "Diamond Peak",
  "Donner Ski Ranch",
  "Heavenly",
  "Homewood",
  "Kirkwood",
  "Mt.Rose",
  "Northstar",
  "Squaw Valley",
  "Sugar Bowl"
];

export default class AddDayForm extends Component {

  submit(e) {
    this.props.onNewDay({
      resort: this._resort.value,
      date: this._date.value,
      powder: this._powder.checked,
      backcountry: this._backcountry.checked
    });
    this._resort.value = '';
    this._date.value = '';
    this._powder.checked = false;
    this._backcountry.checked = false;
    e.preventDefault();
  }

  setResort(element) {
    this._resort = element;
  }

  setDate(element) {
    this._date = element;
  }

  setPowder(element){
    this._powder = element;
  }

  setBackCountry(element){
    this._backcountry = element;
  }

  render() {
    return (
      <form onSubmit={this.submit} className="add-day">
        <label htmlFor="resort">Resort Name</label>
        <Autocomplete options={resorts}
                      ref={this.setResort}
                      required/>
        <label htmlFor="date">Date</label>
        <input id="date"
               type="date"
               defaultValue={this.props.date}
               ref={this.setDate}
               required/>
        <div>
          <input id="powder"
                 type="checkbox"
                 defaultChecked={this.props.powder}
                 ref={this.setPowder}/>
          <label htmlFor="powder">Powder Day</label>
        </div>
        <div>
          <input id="backcountry"
                 type="checkbox"
                 defaultChecked={this.props.backcountry}
                 ref={this.setBackCountry}/>
          <label htmlFor="backcountry">Backcountry Day</label>
        </div>
        <button>Add Day</button>
      </form>
    );
  }
}

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-06-30",
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
