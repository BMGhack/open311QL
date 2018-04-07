const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLBoolean } = require('graphql');

const ValueType = require('./value_type')

module.exports = new GraphQLObjectType({
  name: "Attribute",
  description: "The attribute type",

  fields: () => ({
    variable: {
      type: GraphQLBoolean,
      resolve: json => { return json.variable }
    },
    code: {
      type: GraphQLString,
      resolve: json => { return json.code }
    },
    datatype: {
      type: GraphQLString,
      resolve: json => { return json.datatype }
    },
    required: {
     type: GraphQLBoolean,
     resolve: json => { return json.required }
    },
    datatype_description: {
     type: GraphQLString,
     resolve: json => { return json.datatype_description }
    },
    values: {
     type: new GraphQLList(ValueType),
     resolve: json => { return json.values }
    }
  })
})