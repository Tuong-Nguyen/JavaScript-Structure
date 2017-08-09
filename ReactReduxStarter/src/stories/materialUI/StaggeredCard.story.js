/**
 * Created by lnthao on 7/28/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StaggeredCard from './../common/StaggeredCard';

const cards = [
  {
    title: 'Word of the Day',
    pronunciation: 'be•nev•o•lent',
    type: 'adjective',
    sample: 'a benevolent smile',
    meaning: 'well meaning and kindly.'
  },
  {
    title: 'Word of the Day 1',
    pronunciation: 'be•nev•o•lent 1',
    type: 'adjective',
    sample: 'a benevolent smile 1',
    meaning: 'well meaning and kindly 1.'
  },
  {
    title: 'Word of the Day 2',
    pronunciation: 'be•nev•o•lent 2',
    type: 'adjective',
    sample: 'a benevolent smile 2',
    meaning: 'well meaning and kindly 2.'
  }
];

storiesOf('Staggered Card', module)
  .add('Default', () => (
    <StaggeredCard cards={cards} />
  ));
