/**
 * Presentation component which shows a list of song.titles and show "Loading..." if the data is loading
 * @param songs
 * @param isLoading
 * @returns {XML}
 * @constructor
 */
import React, {PropTypes, Component} from 'react';
import {Link} from "react-router";
import '../style/style.css';

export class SongList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.deleteSong(event.target.parentElement.attributes['data-key'].value);
    }

    render() {
        return (
            <div>
                <h1>Song List</h1>
                {
                    this.props.isLoading !== false ?
                    <div>Loading...</div>
                    :
                    <ul className="collection">
                        {
                            this.props.songs.map((song) => (<li key={song.id} data-key={song.id} className="collection-item">
                                {song.title}
                                <i className="material-icons" onClick={this.handleClick}>delete</i>
                            </li>))
                        }
                    </ul>
                }
                <Link to="/song/create" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

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
    isLoading: PropTypes.bool,
    /**
     * deleteSong handler
     */
    deleteSong: PropTypes.func
};