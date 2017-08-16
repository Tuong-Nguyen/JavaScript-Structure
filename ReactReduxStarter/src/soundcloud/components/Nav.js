import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { AppBar, Toolbar } from 'material-ui';

import Link from './Link';
import SearchBox from './SearchBox';
import Popover from './Popover';

export const styleSheet = createStyleSheet(theme => ({
  logoLink: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
}));

const propTypes = {
  classes: PropTypes.object
};

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: ''
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <i className="fa fa-soundcloud" aria-hidden="true"/>
          <Link to="/" className={classes.logoLink}>
            SoundCloud
          </Link>
          <SearchBox
            value={this.state.keyword}
            onChange={this.handleSearchInputChange}
          />
          <Popover/>
        </Toolbar>
      </AppBar>
    );
  }
}

Nav.propTypes = propTypes;

export default withStyles(styleSheet)(Nav);