import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Shots from '../components/Shots';

class FilterableShotList extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className="filterable-shot-list">
        <Header
          query={this.state.query}
          onQueryChange={this.handleQueryChange}
        />
        <Menu />
        <Shots
          shots={this.props.shots}
          authors={this.props.authors}
        />
      </div>
    );
  }
}

FilterableShotList.propTypes = {
  shots: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    shots: state.entities.shots,
    authors: state.entities.authors
  };
};

export default connect(mapStateToProps)(FilterableShotList);