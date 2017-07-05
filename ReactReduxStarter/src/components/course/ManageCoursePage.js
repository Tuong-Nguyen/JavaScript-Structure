/**
 * Created by lnthao on 7/5/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
}

function mapStateToProps(state, ownProps){
  console.log('ManageCoursePage - mapStateToProps');
  return {
    course: state.course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
