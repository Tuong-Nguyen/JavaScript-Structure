/**
 * Created by nttao on 7/26/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {MaterialList} from './../MaterialUiComponents/ListComponent'
storiesOf ('material-ui.List', module)
  .add('List', () =>(
    <MaterialList/>
  ));
