import gql from 'graphql-tag';

export const fetchSongs = gql`
    query RootQueryType {
        songs {
            id
            title
        }
    }
`;