/**
 * Presentation component which shows a list of song.titles and show "Loading..." if the data is loading
 * @param songs
 * @param isLoading
 * @returns {XML}
 * @constructor
 */
import React, {PropTypes} from 'react';
import {Link} from "react-router";

export const SongList = ({songs, isLoading}) => {
    return (
        <div>
            <h1>Song List</h1>
            {isLoading !== false ?
                <div>Loading...</div>
                :
                <ul className="collection">
                    {songs.map((song) => <li key={song.id}>{song.title}</li>)}
                </ul>
            }
            <Link to="/song/create" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
        </div>
    );
};

SongList.propTypes = {
    /**
     * Array of songs { id, title }
     */
    songs: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    /**
     * Song is loading or not
     */
    isLoading: PropTypes.bool
};