/**
 * Created by lnthao on 6/29/2017.
 */
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component{
  render() {
    return (
      <div className="container-fluild">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}
export default connect(mapStateToProps)(App);
