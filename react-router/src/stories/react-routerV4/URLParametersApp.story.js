/**
 * Created by nkim on 8/17/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import URLParametersApp from '../../components/URLParametersApp';

storiesOf('URL Parameters', module)
    .add('Params is required', () => (
        <URLParametersApp/>
    ))
    .add('Params is optional', () => (
        <URLParametersApp optional={true}/>
    ));