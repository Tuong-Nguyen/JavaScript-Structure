/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Progress, {CircularProgress, LinearProgress} from 'material-ui/Progress';
import LinearProgressComponent, {CircularProgressComponent, CircularInteractiveProgressComponent} from './../MaterialUiComponents/ProgressComponent';


var progressStatus = {
  loading: false,
  success: true
}
storiesOf("material-ui.Progress", module)
  .add('Circular Progress', withInfo()(()=>(
    <div>
      <CircularProgress size={50} />
      <CircularProgress color='accent' />
    </div>
  )))
  .add('Lineer Progress', withInfo()(()=>(
    <div>
      <LinearProgress />
      <LinearProgress color="accent"/>
    </div>
  )))
// TODO: Add circular determinate progress
  .add('Circular Determinate Progress', ()=>(
    <div>
      <CircularProgressComponent />
    </div>
  ))
// TODO: Add circular interactive integration progress
//   .add('Circular Interactive Integration', ()=>(
//     <CircularInteractiveProgressComponent/>
//   ))
// TODO: Add linear determinate progress
  .add('Lineer Determinate Progress', ()=>(
    <div>
      <LinearProgressComponent/>
    </div>
  ));
