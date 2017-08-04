import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Paper, Tabs, Tab, Menu, MenuItem, FormControl, InputLabel, Input, Avatar } from 'material-ui';
import grey from 'material-ui/colors/grey';

const styleSheet = createStyleSheet(theme => ({
  logo: {
    marginRight: '32px'
  },
  root: {
    minWidth: '10px'
  },
  avatar: {
    marginRight: '32px',
    marginLeft: 'auto'
  },
  searchPlaceholder: {
    color: '#fff'
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

  createTabs(labels, rootClass) {
    const tabNodes = labels.map(label =>
      <Tab
        key={label}
        label={label}
        classes={{
          root: rootClass
        }}
      />
    );
    return tabNodes;
  }

  render() {
    const { query, onQueryChange, classes } = this.props;
    const tabLabels = ['Shots', 'Designers', 'Blog', 'Padcast', 'Meetups', 'Jobs', '...'];
    return (
      <AppBar position="static" color='primary'>
        <Toolbar>
          <a className={classes.logo}>
            <img src="img/logo-small.png" alt="Dribbble" />
          </a>
          <Tabs index={this.state.focusTab} onChange={this.handleChange}>
            {this.createTabs(tabLabels, classes.root)}
          </Tabs>
          <div className={classes.avatar}>
            <Avatar src="img/avatar-default.gif" />
            <Menu open={false}>
              <MenuItem>username</MenuItem>
              <MenuItem>Go Pro</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem>Sign Out</MenuItem>
            </Menu>
          </div>
          <FormControl>
            <InputLabel className={classes.searchPlaceholder}>Search...</InputLabel>
            <Input value={query} onChange={onQueryChange} />
          </FormControl>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Header);