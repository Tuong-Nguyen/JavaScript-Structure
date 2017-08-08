import React from 'react';
import {storiesOf} from '@storybook/react';
import {SongList} from "./SongList";


storiesOf('SongList', module)
    .add('with 3 songs', () => {
        const songs = [
            {title: 'Run'}, {title: 'My hear will go on'}, {title: 'Safe and Sound'}
        ];
        return (<SongList songs={songs}/>);
    });