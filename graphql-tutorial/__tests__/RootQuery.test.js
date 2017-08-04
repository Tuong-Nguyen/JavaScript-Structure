import ApolloClient, {createNetworkInterface} from 'apollo-client';
import gql from 'graphql-tag';

describe("GraphQL", () => {
    test("Query users", () => {
        const client = new ApolloClient({
            networkInterface: createNetworkInterface({
                uri: 'http://localhost:4000'
            }),
        });

        const resultPromise = client.query({
            query: gql`
                query RootQuery {
                    user(id: "23") {
                        id
                        firstName
                        age
                    }
                }
            `
        });
        return expect(resultPromise).resolves.toBeDefined();
    });
})
;