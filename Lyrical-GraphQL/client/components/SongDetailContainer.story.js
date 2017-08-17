import React from 'react';
import {storiesOf} from '@storybook/react';
import {SongDetailContainer} from "./SongDetailContainer";


storiesOf('SongDetailContainer', module)
    .add('show lyrics with Add form and Back link', () => {
        const song = {
            title: 'Hello',
            id: '1',
            lyrics: [{id: '1', content: 'I have', likes:1}]
        };
        return (<SongDetailContainer song={song} isLoading={false}/>);
    })
    .add('no lyrics', () => {
        const song = {
            title: 'Hello',
            id: '1',
            lyrics: []
        };
        return (<SongDetailContainer song={song} isLoading={false}/>);
    });