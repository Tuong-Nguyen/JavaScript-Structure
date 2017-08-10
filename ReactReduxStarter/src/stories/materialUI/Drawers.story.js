/**
 * Created by nttao on 7/26/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import MaterialDrawer from './../MaterialUiComponents/DrawerComponent';
import Drawer from 'material-ui/Drawer';
import {MaterialList} from './../MaterialUiComponents/ListComponent';

storiesOf('material-ui.Drawers', module)
  .add('Drawer info', withInfo('Info')(() =>(
    <Drawer open={false}>
      <MaterialList/>
    </Drawer>
  )))
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
