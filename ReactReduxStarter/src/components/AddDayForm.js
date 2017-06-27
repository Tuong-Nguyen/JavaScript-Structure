/**
 * Created by lnthao on 6/27/2017.
 */
import {Component, PropTypes} from 'react';
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
class Autocomplete extends Component {
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

export const AddDayForm = ({resort, date, powder, backcountry, onNewDay}) => {
  let _resort, _date, _powder, _backcountry;
  const submit = (e) => {
    onNewDay({
      resort: _resort.value,
      date: _date.value,
      powder: _powder.checked,
      backcountry: _backcountry.checked
    });
    _resort.value = '';
    _date.value = '';
    _powder.checked = false;
    _backcountry.checked = false;
    e.preventDefault();
    console.log('resort', _resort.value);
    console.log('date', _date.value);
    console.log('powder', _powder.checked);
    console.log('backcountry', _backcountry.checked);
  }

  return (
    <form onSubmit={submit} className="add-day">
      <label htmlFor="resort">Resort Name</label>
      <Autocomplete options={resorts}
             ref={input => _resort = input}
             required/>
      <label htmlFor="date">Date</label>
      <input id="date"
             type="date"
             defaultValue={date}
             ref={input => _date = input}
             required/>
      <div>
        <input id="powder"
               type="checkbox"
               defaultChecked={powder}
               ref={input => _powder = input}/>
        <label htmlFor="powder">Powder Day</label>
      </div>
      <div>
        <input id="backcountry"
               type="checkbox"
               defaultChecked={backcountry}
               ref={input => _backcountry = input}/>
        <label htmlFor="backcountry">Backcountry Day</label>
      </div>
      <button>Add Day</button>
    </form>
  );
};

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
  backcountry: PropTypes.bool.isRequired
};
