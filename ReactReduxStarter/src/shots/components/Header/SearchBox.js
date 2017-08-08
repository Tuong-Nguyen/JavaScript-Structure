import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormControl, InputLabel, Input } from 'material-ui';

const styleSheet = createStyleSheet(theme => ({
  searchBox: {

  }
}));

const SearchBox = (props) => {
  const {
    classes,
    onQueryChange,
    query
  } = props;

  return (
    <FormControl className={classes.searchBox}>
      <InputLabel>Search...</InputLabel>
      <Input value={query} onChange={onQueryChange} />
    </FormControl>
  );
};

SearchBox.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styleSheet)(SearchBox);