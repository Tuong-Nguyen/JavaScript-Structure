import React, {Component, PropTypes} from 'react';
import {fetchSongs} from '../queries/fetchSongs';
import {graphql} from 'react-apollo';
import {SongList} from "./SongList";

export class SongListContainer extends Component {
    render() {
        return (<SongList songs={this.props.songList} isLoading={this.props.isLoading}/>);
    }
}

SongListContainer.propTypes = {
    /**
     * Array of songs { id, title }
     */
    songList: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.string.required,
        title: PropTypes.string.required
    })),
    /**
     * Song is loading or not
     */
    isLoading: PropTypes.bool
};

export function mapResponseToProps({data}) {
    return {
        songList: data.songs,
        isLoading: data.loading
    };
}

export default graphql(fetchSongs, {props: mapResponseToProps})(SongListContainer);