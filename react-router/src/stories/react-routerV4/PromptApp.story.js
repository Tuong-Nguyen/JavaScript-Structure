/**
 * Created by nkim on 8/18/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import PromptApp from '../../components/PromptApp';

storiesOf('Prompt', module)
    .add('Intercept route changs', () => (
        <PromptApp/>
    ));