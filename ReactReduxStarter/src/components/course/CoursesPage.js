import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';
import { setStateOfCourse } from "../../selectors/selectors";

class CoursesPage extends Component {
  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      clicked: false
    };
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: setStateOfCourse(state)
    //courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
