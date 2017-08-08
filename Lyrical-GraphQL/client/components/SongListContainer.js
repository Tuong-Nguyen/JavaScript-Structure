import React, {Component, PropTypes} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {SongList} from "./SongList";

export class SongListContainer extends Component {
    render() {
        console.log(this.props);
        if (this.props.data.loading === true) {
            return (<div>"SongListContainer"</div>);
        } else {
            return (<SongList songs={this.props.data.songs}></SongList>);
        }
    }
}

SongListContainer.propTypes = {};

const query = gql`
    {
        songs {
            id
            title
        }
    }
`;

export default graphql(query)(SongListContainer);

// export default SongListContainer;