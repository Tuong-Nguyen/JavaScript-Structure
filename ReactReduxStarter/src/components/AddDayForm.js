/**
 * Created by lnthao on 6/27/2017.
 */
import {PropTypes} from 'react';
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
      <input id="resort"
             type="text"
             defaultValue={resort}
             ref={input => _resort = input}
             required/>
      <label htmlFor="date">Date</label>
      <input id="date"
             type="text"
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
