/**
 * Created by QuanLe on 8/3/2017.
 */
import express from 'express';
import expressGraphQL from 'express-graphql';
import {schema} from './schema/schema';

const app = express();
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
   console.log('Listening port 4000');
});