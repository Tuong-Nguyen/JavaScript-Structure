import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema} from 'graphql';
import _ from 'lodash';
import axios from 'axios';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return axios.get("http://localhost:3000/users")
                    .then(response => response.data)
                    .then(users => _.find(users, {id: args.id}));
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery
});