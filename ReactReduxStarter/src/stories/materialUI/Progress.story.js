/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Progress, {CircularProgress, LinearProgress} from 'material-ui/Progress';
import Button from 'material-ui/Button';
import CheckIcon from 'material-ui-icons/Check';
import SaveIcon from 'material-ui-icons/Save';
import LinearProgressComponent, {CircularProgressComponent, CircularInteractiveProgressComponent} from './../MaterialUiComponents/ProgressComponent';


var progressStatus = {
  loading: false,
  success: true
}
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
  ))
// TODO: Add circular determinate progress
  .add('Circular Determinate Progress', ()=>(
    <div>
      <CircularProgressComponent />
    </div>
  ))
// TODO: Add circular interactive integration progress
  .add('Circular Interactive Integration', ()=>(
    <CircularInteractiveProgressComponent/>
  ))
// TODO: Add linear determinate progress
  .add('Lineer Determinate Progress', ()=>(
    <div>
      <LinearProgressComponent/>
    </div>
  ));
