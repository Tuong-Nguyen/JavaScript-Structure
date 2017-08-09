/**
 * Created by lnthao on 8/9/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {StaggeredMotion, spring} from 'react-motion';

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

const StaggedCard = ({cards, classes}) => {
  const defaultStyle = [];
  const effect = {stiffness: 120, damping: 20};
  cards.map((card) => {
    defaultStyle.push({o: 0, h: 0});
  });

  return (
    <StaggeredMotion
      defaultStyles={defaultStyle}
      styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
        return i === 0
          ? {o: spring(1), h: spring(200, effect)}
          : {o: spring(1), h: spring(prevInterpolatedStyles[i - 1].h, { stiffness: effect.stiffness + 20 * i, damping: effect.damping + 10 * i })}
      })}>
      {interpolatingStyles =>
      <div>
        {interpolatingStyles.map((style, i) =>
        <div key={i} style={{opacity: style.o, height: style.h}}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="body1" className={classes.title}>
                {cards[i].title}
              </Typography>
              <Typography type="headline" component="h2">
                {cards[i].pronunciation}
              </Typography>
              <Typography type="body1" className={classes.pos}>
                {cards[i].type}
              </Typography>
              <Typography component="p">
                {cards[i].meaning}<br />
                {cards[i].sample}
              </Typography>
            </CardContent>
          </Card>
        </div>
        )}
      </div>
      }
    </StaggeredMotion>
  );
};

StaggedCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(StaggedCard);
