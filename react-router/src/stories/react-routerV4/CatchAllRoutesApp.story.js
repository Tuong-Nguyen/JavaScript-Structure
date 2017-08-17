/**
 * Created by nkim on 8/17/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import CatchAllRoutesApp from '../../components/CatchAllRoutesApp';

storiesOf('Catch all routes', module)
    .add('Catch all routes with route does not have path', () => (
        <CatchAllRoutesApp/>
    ))
    .add('Wrap all routes with Switch component', () => (
        <CatchAllRoutesApp isSwitch={true}/>
    ));