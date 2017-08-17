/**
 * Created by nkim on 8/17/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ExactStrictRouteApp from '../../components/ExactStrictRouteApp';

storiesOf('ExactStrictRoute', module)
    .add('All routes is not set', () => (
        <ExactStrictRouteApp/>
    ))
    .add('Exact for Home route', () => (
        <ExactStrictRouteApp exactHome={true}/>
    ))
    .add('Exact for About route', () => (
        <ExactStrictRouteApp exactHome={true} exactAbout={true}/>
    ))
    .add('Strict for About route', () => (
        <ExactStrictRouteApp exactHome={true} strictAbout={true}/>
    ))
    .add('Exact and Strict for About route', () => (
        <ExactStrictRouteApp exactHome={true} exactAbout={true} strictAbout={true}/>
    ))
    .add('Strict for Contact route with trailing slash in path', () => (
        <ExactStrictRouteApp exactHome={true} strictContact={true}/>
    ))
