import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull} from 'graphql';
import _ from 'lodash';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/"
});

const mapResponseToData = (promise) => promise.then(res => res.data);

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return mapResponseToData(axiosInstance.get(`companies/${parentValue.id}/users`));
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt},
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                return mapResponseToData(axiosInstance.get(`companies/${parentValue.companyId}`));
            }
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return axiosInstance.get("users")
                    .then(response => response.data)
                    .then(users => _.find(users, {id: args.id}));
            }
        },
        company: {
            type: CompanyType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return mapResponseToData(axiosInstance.get(`companies/${args.id}`))
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
                companyId: {type: GraphQLString}
            },
            resolve(parentValue, args){
                return mapResponseToData(axiosInstance.post(`users/`, {firstName: args.firstName, age: args.age, companyId: args.companyId}));
            }
        },
        deleteUser: {
            type: GraphQLString,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {id}){
                return mapResponseToData(axiosInstance.delete(`users/${id}`));
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                firstName: {type: GraphQLString},
                age: {type: GraphQLInt},
                companyId: {type: GraphQLString}
            },
            resolve(parentValue, {id, ...others}) {
                return mapResponseToData(axiosInstance.patch(`users/${id}`, others));
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
});