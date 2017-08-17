/**
 * Created by nkim on 8/17/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import QueryParametersApp from '../../components/QueryParametersApp';

storiesOf('Query Parameters', module)
    .add('Pass and get query parameters', () => (
        <QueryParametersApp/>
    ));