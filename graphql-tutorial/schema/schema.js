import graphql, {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema} from 'graphql';
import _ from 'lodash';


const users =  [
    {id: '23', firstName: 'Bill', age: 20},
    {id: '47', firstName: 'Samantha', age: 47}
];

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
            args: { id: { type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery
});