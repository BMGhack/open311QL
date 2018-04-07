const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLBoolean } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'PostService',
  description: 'The Post Service type',

  fields: () => ({
    service_request_id: {
      type: GraphQLInt,
      resolve: json => { return json.service_request_id }
    },
    token: {
     type: GraphQLString,
     resolve: json => { return json.token }
    },
    service_notice: {
     type: GraphQLString,
     resolve: json => { return json.service_notice }
    },
    account_id: {
     type: GraphQLString,
     resolve: json => { return json.account_id }
    }
  })
})