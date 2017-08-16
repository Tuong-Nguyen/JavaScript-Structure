import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Avatar, Paper, Button } from 'material-ui';
import { AccountCircle } from 'material-ui-icons';

export const styleSheet = createStyleSheet(theme => ({
  root: {
    position: 'relative'
  },

  toggle: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },

  avatar: {
    width: 24,
    height: 24,
    backgroundColor: 'transparent'
  },

  chevron: {
    marginLeft: 4,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)'
  },

  popup: {
    position: 'absolute',
    top: 60,
    left: -165,
    padding: '12px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -17,
      left: 166,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '16px solid rgba(0, 0, 0, 0.1)'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: -16,
      left: 166,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '16px solid white'
    }
  },

  button: {
    backgroundColor: theme.palette.accent[800],
    color: 'white',
    minWidth: 180,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(239, 108, 0, 0.8)'
    }
  }
}));

const propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string
};

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popover: false
    };
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleAvatarClick = this.handleAvatarClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick(e) {
    e.preventDefault();

    if (ReactDOM.findDOMNode(this).contains(e.target))
      return;

    if (this.state.popover) {
      this.setState({
        popover: false
      });
    }
  }

  handleAvatarClick(e) {
    e.preventDefault();

    this.setState({
      popover: !this.state.popover
    });
  }

  renderPopup(classes) {
    const popup = (
      <Paper elevation={4} className={classes.popup}>
        <Button className={classes.button}>Sign into SoundCloud</Button>
      </Paper>
    );
    return this.state.popover ? popup : null;
  }

  render() {
    const {
      classes,
      className: classNameProp,
      ...other
    } = this.props;

    const root = classNames(
      classes.root,
      classNameProp
    );

    const chevron = classNames(
      'fa',
      this.state.popover ? 'fa-chevron-up' : 'fa-chevron-down',
      classes.chevron
    );

    return (
      <div className={root} {...other}>
        <div className={classes.toggle} onClick={this.handleAvatarClick}>
          <Avatar alt="Account" className={classes.avatar}>
            <AccountCircle />
          </Avatar>
          <i className={chevron} aria-hidden="true"/>
        </div>
        { this.renderPopup(classes) }
      </div>
    );
  }
}

Popover.propTypes = propTypes;

export default withStyles(styleSheet)(Popover);