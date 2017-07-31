/**
 * Created by nttao on 7/26/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import MaterialDrawer from './../MaterialUiComponents/DrawerComponent';

storiesOf('material-ui.Drawers', module)
  .add('Left Drawers', () =>(
    <MaterialDrawer anchor="left"/>
  ))
  .add('Top Drawers', () =>(
    <MaterialDrawer anchor="top"/>
  ))
  .add('Right Drawers', () =>(
    <MaterialDrawer anchor="right"/>
  ))
  .add('Bottom Drawers', () =>(
    <MaterialDrawer anchor="bottom"/>
  ));
