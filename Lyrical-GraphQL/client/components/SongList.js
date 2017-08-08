import React, {PropTypes} from 'react';

export const SongList = ({songs}) => {
    return (
        <div>
            <h1>Song List</h1>
            <ul>
                {songs.map((song) => <li>{song.title}</li>)}
            </ul>
        </div>
    );
};

SongList.propTypes = {
  songs: PropTypes.array.required
};