import React from 'react';
import {storiesOf} from '@storybook/react';
import {SongList} from "./SongList";


storiesOf('SongList', module)
    .add('with 3 songs', () => {
        const songs = [
            {id: '1', title: 'Run'}, {id: '2', title: 'My hear will go on'}, {id: '3', title: 'Safe and Sound'}
        ];
        return (
            <SongList songs={songs} isLoading={false} />
        );
    })
    .add('isLoading', () => {
        return (<SongList isLoading={true}/>);
    });