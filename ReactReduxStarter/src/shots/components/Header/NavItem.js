import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';

const styleSheet = createStyleSheet(theme => ({
  navItem: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: '32px',
    height: '64px',
    lineHeight: '64px'
  },

  title: {
    textDecoration: 'none',
    color: theme.palette.primary[400]
  },

  subNavPaper: {
    position: 'absolute',
    top: '64px',
    left: '-10px',
    zIndex: 999,
    width: '200px',
    lineHeight: '32px',
    backgroundColor: theme.palette.primary[800]
  },

  subNav: {
    listStyle: 'none',
    padding: 0
  },

  subTitle: {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    color: theme.palette.primary[400],
    fontSize: '0.9em',
    paddingLeft: '10px',
    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.primary[600],
    }
  }
}));

class NavItem extends React.Component {
  constructor() {
    super();
    this.state = {
      subNavStyle: {
        display: 'none'
      }
    };
    this.onShowSubNav = this.onShowSubNav.bind(this);
    this.onHideSubNav = this.onHideSubNav.bind(this);
  }

  onShowSubNav() {
    this.setState({
      subNavStyle: {
        display: 'block'
      }
    });
  }

  onHideSubNav() {
    this.setState({
      subNavStyle: {
        display: 'none'
      }
    });
  }

  render() {
    const {
      classes,
      title,
      subTitles
    } = this.props;

    const subTitleNodes = subTitles.map(item =>
      <li key={item}>
        <a className={classes.subTitle} href="#">{item}</a>
      </li>
    );

    return (
      <li
        className={classes.navItem}
        onMouseOver={this.onShowSubNav}
        onMouseOut={this.onHideSubNav}
      >
        <a className={classes.title} href="#">{title}</a>
        <Paper className={classes.subNavPaper} elevation={4}>
          <ul className={classes.subNav} style={this.state.subNavStyle}>
            {subTitleNodes}
          </ul>
        </Paper>
      </li>
    );
  }
}

NavItem.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string.isRequired,
  subTitles: PropTypes.array
};

export default withStyles(styleSheet)(NavItem);