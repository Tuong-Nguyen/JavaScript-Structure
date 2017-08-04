/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Progress, {CircularProgress, LinearProgress} from 'material-ui/Progress';

storiesOf("material-ui.Progress", module)
  .add('Circular Progress', ()=>(
    <div>
      <CircularProgress size={50} />
      <CircularProgress color='accent' />
    </div>
  )).add('Lineer Progress', ()=>(
  <div>
    <LinearProgress  />
    <LinearProgress color="accent"/>
  </div>
));
