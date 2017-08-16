/**
 * Created by nkim on 8/16/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicRoutesApp from '../../components/BasicRoutesApp';

storiesOf('Basic Routes', module)
    .add('Link to routes and render components', () => (
        <BasicRoutesApp/>
    ));
