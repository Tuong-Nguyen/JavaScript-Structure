import React from 'react';
import {storiesOf} from '@storybook/react';
import {SongDetailContainer} from "./SongDetailContainer";


storiesOf('SongDetailContainer', module)
    .add('show lyrics with Add form', () => {
        const song = {
            title: 'Hello',
            id: '1',
            lyrics: [{id: '1', content: 'I have', likes:1}]
        };
        return (<SongDetailContainer song={song} isLoading={false}/>);
    });