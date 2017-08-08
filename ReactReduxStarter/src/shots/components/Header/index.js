import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { AppBar, Toolbar } from 'material-ui';

import Logo from './Logo';
import MainNav from './MainNav';
import Account from './Account';
import SearchBox from './SearchBox';

const styleSheet = createStyleSheet(theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary[800]
  }
}));

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      focusTab: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    this.setState({
      focusTab: index
    });
  }

  render() {
    const {
      classes,
      onQueryChange,
      query
    } = this.props;

    return (
      <AppBar position="static" color='primary'>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <MainNav />
          <Account />
          <SearchBox
            onQueryChange={onQueryChange}
            query={query}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

export default withStyles(styleSheet)(Header);