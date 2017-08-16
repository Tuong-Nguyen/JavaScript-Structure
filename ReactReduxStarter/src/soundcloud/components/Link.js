import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';

export const styleSheet = createStyleSheet(theme => ({
  root: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize
  }
}));

const propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.string,
  to: PropTypes.string
};

const Link = (props) => {
  const {
    classes,
    className: classNameProp,
    children,
    to,
    ...other
  } = props;

  const className = classNames(
    classes.root,
    classNameProp
  );

  return (
    <RouterLink to={to} className={className} {...other}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = propTypes;

export default withStyles(styleSheet)(Link);