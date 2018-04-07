const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLBoolean } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Service',
  description: 'The Service Type',

  fields: () => ({
    service_code: {
      type: GraphQLInt,
      resolve: props => {return props.service_code}
    },
    service_name: {
      type: GraphQLString,
      resolve: props => {return props.service_name}
    },
    description: {
     type: GraphQLString,
     resolve: json => { return json.description }
    },
    metadata: {
     type: GraphQLBoolean,
     resolve: json => { return json.metadata }
    },
    type: {
      type: GraphQLString,
      resolve: json => { return json.type }
    },
    //todo: split up keywords into own object
    keywords: {
     type: GraphQLString,
     resolve: json => { return json.keywords }
    },
    group: {
     type: GraphQLString,
     resolve: json => { return json.group }
    }
  })
})