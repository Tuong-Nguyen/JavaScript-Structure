import React, {Component, PropTypes} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {SongForm} from "./SongForm";

export class SongFormContainer extends Component {
    constructor(props){
        super(props);
        this.saveSong= this.saveSong.bind(this);
    }

    saveSong(title) {
        this.props.addSong(title);
    }

    render() {
        return (
            <SongForm saveSong={this.saveSong}/>
        );
    }
}

SongFormContainer.propTypes = {
    addSong: PropTypes.func
};

export function mapGraphqlMutateToProps({mutate}) {
    return {
      addSong: (title) => {
          return mutate({
              variables: {
                  title: title
              }
          });
      }
    };
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export default graphql(mutation, {props: mapGraphqlMutateToProps})(SongFormContainer);