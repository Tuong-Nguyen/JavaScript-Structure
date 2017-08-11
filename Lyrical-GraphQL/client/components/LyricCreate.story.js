import React from 'react';
import {storiesOf} from '@storybook/react';
import {LyricCreate} from "./LyricCreate";


storiesOf('LyricCreate', module)
    .add('show a text box for content', () => {
        return (<LyricCreate addLyric={() => {
        }}/>);
    });