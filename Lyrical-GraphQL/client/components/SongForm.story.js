import React from 'react';
import {storiesOf} from '@storybook/react';
import {SongForm} from "./SongForm";



storiesOf('SongForm', module)
    .add('show the form', () => {
        const saveSong = (song) => {};
        return (
            <SongForm saveSong={saveSong} />
        );
    });