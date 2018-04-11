import { appendFileSync } from 'fs';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./data/schema');

const app = express();
const port = process.env.PORT || 4000

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port);
console.log("Open311QL running on port " + port + ".");