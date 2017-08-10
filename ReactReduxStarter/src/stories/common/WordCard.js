/**
 * Created by lnthao on 8/10/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {makeUpperCaseAndLimitLetter} from '../HOC/MakeUpperCaseAndLimitLetter';

const styleSheet = createStyleSheet(theme => ({
  card: {
    minWidth: 275
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary
  }
}));

const WordCard = ({title, pronunciation, type, meaning, sample, classes}) => {
  return (
    <Card className={classes.card}>
      <CardContent>
      <Typography type="body1" className={classes.title}>
      {title}
      </Typography>
      <Typography type="headline" component="h2">
        {pronunciation}
      </Typography>
      <Typography type="body1" className={classes.pos}>
        {type}
      </Typography>
      <Typography component="p">
        {meaning}<br />
        {sample}
      </Typography>
      </CardContent>
    </Card>
  );
};

WordCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(makeUpperCaseAndLimitLetter(10)(WordCard));
