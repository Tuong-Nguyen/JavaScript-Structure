/**
 * Created by nkim on 8/18/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import RedirectRouteApp from '../../components/RedirectRouteApp';
import RedirectSwitchApp from '../../components/RedirectSwitchApp';

storiesOf('Redirect', module)
    .add('Redirect route in render method', () => (
        <RedirectRouteApp/>
    ))
    .add('Redirect a route is not defined in Switch', () => (
        <RedirectSwitchApp/>
    ));