/**
 * Created by nkim on 8/17/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import RegexRouteApp from '../../components/RegexRouteApp';

storiesOf('Regular Expression', module)
    .add('Match params with regex', () => (
        <RegexRouteApp/>
    ));