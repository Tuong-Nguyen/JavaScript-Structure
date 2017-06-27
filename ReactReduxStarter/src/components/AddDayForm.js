/**
 * Created by lnthao on 6/27/2017.
 */
import {Component, PropTypes} from 'react';
export class AddDayForm extends Component {
  render() {
    const {resort, date, powder, backcountry} = this.props;
    return (
      <form className="add-day">
        <label htmlFor="resort">Resort Name</label>
        <input id="resort"
               type="text"
               defaultValue={resort}
               required/>
        <label htmlFor="date">Date</label>
        <input id="date"
               type="text"
               defaultValue={date}
               required/>
        <div>
          <input id="powder"
                 type="checkbox"
                 defaultChecked={powder}
                 required/>
          <label htmlFor="powder">Powder Day</label>
        </div>
        <div>
          <input id="backcountry"
                 type="checkbox"
                 defaultChecked={backcountry}
                 required/>
          <label htmlFor="backcountry">Backcountry Day</label>
        </div>
      </form>
    );
  }
}
AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-06-30",
  powder: true,
  backcountry: false
}
AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired,
};
