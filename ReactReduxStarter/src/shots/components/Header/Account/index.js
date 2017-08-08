import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Avatar, Paper } from 'material-ui';

import defaultAvatar from './avatar-default.gif';

const styleSheet = createStyleSheet(theme => ({
  account: {
    position: 'relative',
    paddingTop: 12
  },
  avatar: {

  },
  accountPopupPaper: {
    position: 'absolute',
    top: 64,
    left: -10,
    backgroundColor: theme.palette.primary[800]
  },
  accountPopup: {
    padding: 0,
    listStyle: 'none'
  },
  link: {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    paddingLeft: 10,
    color: theme.palette.primary[400],
    lineHeight: '32px',
    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.primary[600]
    }
  }
}));

const Account = (props) => {
  const { classes } = props;

  return (
    <div className={classes.account}>
      <Avatar className={classes.avatar} src={defaultAvatar} />
      <Paper className={classes.accountPopupPaper} elevation={4}>
        <ul className={classes.accountPopup}>
          <li><a className={classes.link} href="#">username</a></li>
          <li><a className={classes.link} href="#">Go Pro</a></li>
          <li><a className={classes.link} href="#">Account Settings</a></li>
          <li><a className={classes.link} href="#">Sign Out</a></li>
        </ul>
      </Paper>
    </div>
  );
};

Account.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styleSheet)(Account);