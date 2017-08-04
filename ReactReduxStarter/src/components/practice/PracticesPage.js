import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as practiceActions from '../../actions/practiceActions';
import { browserHistory } from 'react-router';
import PracticeList from './PracticeList';

//define + export class
class PracticesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectAddPractice = this.redirectAddPractice.bind(this);
  }

  //Create function for redirect to Add form
  redirectAddPractice() {
    browserHistory.push('/practice');
  }
  render() {
    const { practices } = this.props;
    console.log(this.props);
    return (
      <div>
      <h1>Practices List</h1>
      <input
        type="submit"
        value="Add Practice"
        className="btn btn-priamry"
        onClick={this.redirectAddPractice}
      />
        <PracticeList practices={practices} />
      </div>
    );
  }
}

//Prototypes for component
PracticesPage.propTypes = {
  practices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Define mapping state -> props
function mapStateToProps(state, ownProps) {
  return {
    practices: state.practices
  };
}

//Define mapping Dispatch -> props
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(practiceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PracticesPage);
