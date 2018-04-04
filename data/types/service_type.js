const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Service',
  description: 'The Service Type',

  fields: () => ({
    service_code: {
      type: GraphQLInt,
      resolve: json => {
        console.log(json);
        return json;
      }
    }
  })
})