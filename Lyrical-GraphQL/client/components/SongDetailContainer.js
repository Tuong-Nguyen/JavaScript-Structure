import React, {Component, PropTypes} from 'react';
import {LyricList} from "./LyricList";
import {LyricCreate} from "./LyricCreate";
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

export class SongDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.handleAddLyric = this.handleAddLyric.bind(this);
    }

    handleAddLyric(content) {
        this.props.addLyric(this.props.song.id, content);
    }

    render() {
        return (
            <div>
                <h2>{this.props.song.title}</h2>
                <LyricList lyrics={this.props.song.lyrics} isLoading={this.props.isLoading}
                           likeLyric={this.props.likeLyric}/>
                <LyricCreate addLyric={this.handleAddLyric}/>
            </div>
        );
    }
}

SongDetailContainer.propTypes = {
    song: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        lyrics: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        }))
    }),
    isLoading: PropTypes.bool,
    likeLyric: PropTypes.func,
    addLyric: PropTypes.func
};

export function mapDataToProp({data, ownProps}) {
    return {
        song: data.song,
        isLoading: data.loading,
        addLyric: ownProps.addLyric
    };
}

export function mapMutationToProp({mutate}) {
    return {
        addLyric: (id, content) => {
            return mutate({
                variables: {
                    id: id,
                    content: content
                }
            });

        }
    };
}

const addLyricToSongMutation = gql`
    mutation addLyricToSong ($id: ID, $content: String) {
        addLyricToSong(content: $content, songId: $id) {
            id
        }
    }
`;

const songDetailQuery = gql`
    query song($id: ID) {
        song(id: $id) {
            id
            title
            lyrics {
                id
                likes
                content
                song
            }
        }
    }
`;

export default graphql(addLyricToSongMutation, {props: mapMutationToProp})(graphql(songDetailQuery, {props: mapDataToProp})(SongDetailContainer));