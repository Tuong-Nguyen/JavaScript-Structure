import React from 'react';
import {storiesOf} from '@storybook/react';
import {LyricList} from "./LyricList";


storiesOf('LyricList.story.js', module)
    .add('no props - show Loading', () => {
        return (<LyricList />);
    })
    .add('isLoading = true - show Loading', () => {
        return <LyricList isLoading={true}/>;
    })
    .add('show 3 lyrics', () => {
        const lyrics = [
            {id: '1', content: 'hello'},
            {id: '2', content: 'bonjour'},
            {id: '3', content: 'ciao'}
        ];
        return <LyricList isLoading={false} lyrics={lyrics}/>;
});