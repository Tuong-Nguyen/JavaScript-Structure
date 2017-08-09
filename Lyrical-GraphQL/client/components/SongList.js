import React, {PropTypes} from 'react';

export const SongList = ({songs, isLoading}) => {
    return (
        <div>
            <h1>Song List</h1>
            {isLoading ?
                <div>Loading...</div>
                :
                <ul>
                    {songs.map((song) => <li key={song.id}>{song.title}</li>)}
                </ul>
            }
        </div>
    );
};

SongList.propTypes = {
    /**
     * Array of songs { id, title }
     */
    songs: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.string.required,
        title: PropTypes.string.required
    })),
    /**
     * Song is loading or not
     */
    isLoading: PropTypes.bool.required
};