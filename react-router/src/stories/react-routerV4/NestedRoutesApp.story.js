/**
 * Created by nkim on 8/17/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import NestedRoutesApp from '../../components/NestedRoutesApp';

storiesOf('Nested Routes', module)
    .add('Example', () => (
        <NestedRoutesApp/>
    ));