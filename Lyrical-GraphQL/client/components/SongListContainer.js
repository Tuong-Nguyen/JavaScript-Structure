import React, {Component, PropTypes} from 'react';
import {fetchSongs} from '../queries/fetchSongs';
import {graphql} from 'react-apollo';
import {SongList} from "./SongList";
import gql from 'graphql-tag';

export class SongListContainer extends Component {
    constructor(props){
        super(props);
        this.deleteSong = this.deleteSong.bind(this);
    }

    deleteSong(id){
        this.props.deleteSong(id)
            .then(() => this.props.refetchSongs());
    }

    render() {
        return (<SongList songs={this.props.songList} isLoading={this.props.isLoading} deleteSong={this.deleteSong}/>);
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
    isLoading: PropTypes.bool,
    /**
     * refetchSongs function
     */
    refetchSongs: PropTypes.func,
    /**
     * deleteSong handler
     */
    deleteSong: PropTypes.func
};

export function mapDataToProps({data, ownProps}) {
    return {
        songList: data.songs,
        isLoading: data.loading,
        refetchSongs: data.refetch,
        deleteSong: ownProps.deleteSong
    };
}

const deleteSong = gql`
    mutation deleteSong($id: ID){
        deleteSong(id: $id){
            id
        }
    }
`;

export function mapGraphqlMutationToProps({mutate}) {
    return {
       deleteSong: (id) => {
           return mutate({
              variables: {
                  id: id
              } 
           });
       }
    };
}

export default graphql(deleteSong, {props: mapGraphqlMutationToProps})(graphql(fetchSongs, {props: mapDataToProps})(SongListContainer));