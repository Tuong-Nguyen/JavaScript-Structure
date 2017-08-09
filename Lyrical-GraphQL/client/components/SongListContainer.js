import React, {Component, PropTypes} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {SongList} from "./SongList";

export class SongListContainer extends Component {
    render() {
        return (<SongList songs={this.props.songs} isLoading={this.props.isLoading}></SongList>);
    }
}

SongListContainer.propTypes = {
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

const query = gql`
    query RootQueryType {
        songs {
            id
            title
        }
    }
`;

export function mapResponseToProps({data}) {
    return {
        songs: data.songs,
        isLoading: data.loading
    };
}

export default graphql(query, {props: mapResponseToProps})(SongListContainer);