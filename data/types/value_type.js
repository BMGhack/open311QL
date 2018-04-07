const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLBoolean } = require('graphql');

module.exports = new GraphQLObjectType({
  name: "Value",
  description: "Value type",

  fields: () => ({
    key: {
      type: GraphQLString,
      resolve: json => { return json.key }
    },
    name: {
      type: GraphQLString,
      resolve: json => { return json.name }
    }
  })
})