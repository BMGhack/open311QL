const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLBoolean } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Request',
  description: 'The Request Type',

  fields: () => ({
    service_request_id: {
      type: GraphQLInt,
      resolve: json => {return json.service_request_id}
    },
    status: {
      type: GraphQLString,
      resolve: json => {return json.status}
    },
    status_notes: {
     type: GraphQLString,
     resolve: json => { return json.status_notes }
    },
    service_name: {
     type: GraphQLString,
     resolve: json => { return json.service_name }
    },
    service_code: {
     type: GraphQLInt,
     resolve: json => { return json.service_code }
    },
    description: {
      type: GraphQLString,
      resolve: json => { return json.description }
    },
    agency_responsible: {
     type: GraphQLString,
     resolve: json => { return json.agency_responsible }
    },
    service_notice: {
      type: GraphQLString,
      resolve: json => { return json.service_notice }
    },
    requested_datetime: {
     type: GraphQLString,
     resolve: json => { return json.requested_datetime }
    },
    updated_datetime: {
     type: GraphQLString,
     resolve: json => { return json.updated_datetime }
    },
    expected_datetime: {
     type: GraphQLString,
     resolve: json => { return json.expected_datetime }
    },
    address: {
     type: GraphQLString,
     resolve: json => { return json.address }
    },
    address_id: {
     type: GraphQLString,
     resolve: json => { return json.address_id }
    },
    zipcode: {
     type: GraphQLString,
     resolve: json => { return json.zipcode }
    },
    lat: {
     type: GraphQLString,
     resolve: json => { return json.lat }
    },
    long: {
     type: GraphQLString,
     resolve: json => { return json.long }
    },
    media_url: {
     type: GraphQLString,
     resolve: json => { return json.media_url }
    }
  })
})