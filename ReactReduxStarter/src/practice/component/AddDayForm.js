/**
 * Created by nctuong on 7/18/2017.
 */
import React, {Component, PropTypes} from 'react';

export default class AddDayForm extends Component {

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    console.log('resort', this.refs.resort.value);
    console.log('resort', this.refs.date.value);
    console.log('resort', this.refs.powder.checked);
    console.log('resort', this.refs.backcountry.checked);
  }

  render() {
    return (
      <form onSubmit={this.submit} className="add-day">
        <label htmlFor="resort">Resort Name</label>
        <input id="resort" type="text" required defaultValue={this.props.resort} ref="resort"/>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" required defaultValue={this.props.date} ref="date"/>
        <div>
          <input id="powder" type="checkbox" defaultChecked={this.props.powder} ref="powder"/>
          <label htmlFor="powder">Power Day</label>
        </div>
        <div>
          <input id="backcountry" type="checkbox" defaultChecked={this.props.backcountry} ref="backcountry"/>
          <label htmlFor="backcountry">Backcountry Day</label>
        </div>
        <button>Add Day</button>
      </form>
    );
  }
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
};

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-02-12",
  powder: true,
  backcountry: false
}
