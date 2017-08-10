/**
 * Created by lnthao on 8/9/2017.
 */
import React from 'react';
import {StaggeredMotion, spring} from 'react-motion';
import WordCard from './WordCard';

const StaggedCard = ({cards}) => {
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
          <WordCard {...cards[i]}/>
        </div>
        )}
      </div>
      }
    </StaggeredMotion>
  );
};

export default StaggedCard;
