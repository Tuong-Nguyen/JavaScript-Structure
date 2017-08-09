import React, {PropTypes} from 'react';

/**
 * Presentation component which shows a list of song.titles and show "Loading..." if the data is loading
 * @param songs
 * @param isLoading
 * @returns {XML}
 * @constructor
 */
export const SongList = ({songs, isLoading}) => {
    return (
        <div>
            <h1>Song List</h1>
            {isLoading !== false ?
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
    isLoading: PropTypes.bool
};