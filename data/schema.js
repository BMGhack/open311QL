const axios = require('axios');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList } = require('graphql');
const querystring = require('querystring');

// This calls for an environment variable that contains your Open311 api key. You can either replace this with a string
// that contains your key or set it as an environment variable on the machine you are running the server on.
var apiKey = process.env.open311_key
var baseUrl = 'https://bloomington.in.gov/crm-test/open311/v2/';

var getServiceListUrl = baseUrl + 'services.json';
var getServiceRequestsUrl = baseUrl + 'requests.json';
var getServiceDefinitionUrl = baseUrl + 'services/';
var postServiceRequestUrl = baseUrl + 'requests.json';

const ServiceType = require('./types/service_type');
const RequestType = require('./types/request_type');
const AttributeType = require('./types/attribute_type');
const PostServiceType = require('./types/post_service_type');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({    
      serviceList: {
        type: new GraphQLList(ServiceType),
        description: "provide a list of acceptable 311 service request types and their associated service codes. These request types can be unique to the city/jurisdiction.",
        resolve: (root, args) => axios.get(getServiceListUrl)
          .then(response => {
            //console.dir(response.data)
            return response.data;
          })
      },

      serviceRequests: {
        type: new GraphQLList(RequestType),
        description: "Query the current status of multiple requests",
        resolve: (root, args) => axios.get(getServiceRequestsUrl)
          .then(response => {
            return response.data;
          })
      },

      serviceDefinition: {
        type: new GraphQLList(AttributeType),
        description: "Define attributes associated with a service code. These attributes can be unique to the city/jurisdiction.",
        args: {
          service_code: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "Required: The code of the service that you would like to return the attributes of. Find using serviceList."
          }
        },
        resolve: (root, args) => axios.get(getServiceDefinitionUrl + args.service_code + '.json')
          .then(response => {
            //console.dir(response.data)
            return response.data.attributes
          })
      }
    })
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: '...',

    fields: () => ({
      postServiceRequest: {
        type: RequestType,
        description: "Create service requests",
        args: {
          service_code: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'Required: The code of the service that you would like to create. Find using query.serivceList'
          },
          // todo: attributes is pretty messy, try to figure out
          violation: {
            type: GraphQLString,
            description: 'This takes the form of attribute[code]=value where multiple code/value pairs can be specified as well as multiple values for the same code in the case of a multivaluelist datatype (attribute[code1][]=value1&attribute[code1][]=value2&attribute[code1][]=value3)'
          },
          propertyowner: {
            type: GraphQLString,
            description: ''
          },
          propertytype: {
            type: GraphQLString,
            description: ''
          },
          plagued: {
            type: GraphQLString,
            description: ''
          },
          same: {
            type: GraphQLString,
            description: ''
          },
          contact: {
            type: GraphQLString,
            description: ''
          },
          violations: {
            type:GraphQLString,
            description: ''
          },
          subcategory: {
            type:GraphQLString,
            description: ''
          },
          reportee: {
            type:GraphQLString,
            description: ''
          },
          other: {
            type:GraphQLString,
            description: ''
          },
          timeofday: {
            type:GraphQLString,
            description: ''
          },
          issue: {
            type:GraphQLString,
            description: ''
          },
          complaintType: {
            type:GraphQLString,
            description: ''
          },
          specificrequest: {
            type:GraphQLString,
            description: ''
          },
          problem: {
            type:GraphQLString,
            description: ''
          },
          type: {
            type:GraphQLString,
            description: ''
          },
          involve: {
            type:GraphQLString,
            description: ''
          },
          problem_type: {
            type:GraphQLString,
            description: ''
          },
          workorder: {
            type:GraphQLString,
            description: ''
          },
          applicationName: {
            type:GraphQLString,
            description: ''
          },
          applicationUrl: {
            type:GraphQLString,
            description: ''
          },
          lat: {
            type: GraphQLString,
            description: 'lat & long both need to be sent even though they are sent as two separate parameters. lat & long are required if no address_string or address_id is provided.'
          },
          long: {
            type: GraphQLString,
            description: 'lat & long both need to be sent even though they are sent as two separate parameters. lat & long are required if no address_string or address_id is provided.'
          },
          address_string: {
            type: GraphQLString,
            description: 'This is required if no lat/long or address_id are provided. This should be written from most specific to most general geographic unit, eg address number or cross streets, street name, neighborhood/district, city/town/village, county, postal code.'
          },
          email: {
            type: GraphQLString,
            description: 'The email address of the person submitting the request'
          },
          device_id: {
            type: GraphQLString,
            description: 'The unique device ID of the device submitting the request. This is usually only used for mobile devices.'
          },
          account_id: {
            type: GraphQLString,
            description: 'The unique ID for the user account of the person submitting the request'
          },
          first_name: {
            type: GraphQLString,
            description: 'The given name of the person submitting the request'
          },
          last_name: {
            type: GraphQLString,
            description: 'The family name of the person submitting the request'
          },
          phone: {
            type: GraphQLString,
            description: 'The phone number of the person submitting the request'
          },
          description: {
            type: GraphQLString,
            description: 'A full description of the request or report being submitted.'
          },
          media_url: {
            type: GraphQLString,
            description: 'A URL to media associated with the request, eg an image.'
          }
        },
        resolve: (root, args) => axios({
          method: 'post',
          url: postServiceRequestUrl,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: querystring.stringify({
            api_key: apiKey,
            service_code: args.service_code,
            'attribute[violation]': args.violation,
            'attribute[propertyowner]': args.propertyowner,
            'attribute[propertytype]': args.propertytype,
            'attribute[plagued]': args.plagued,
            'attribute[same]': args.same,
            'attributes[contact]': args.contact,
            'attribute[violations]': args.violations,
            'attribute[subcategory]': args.subcategory,
            'attribute[reportee]': args.reportee,
            'attribute[other]': args.other,
            'attribute[timeofday]': args.timeofday,
            'attribute[issue]': args.issue,
            'attribute[complaintType]': args.complaintType,
            'attribute[specific request]': args.specificrequest,
            'attribute[proplem]': args.problem,
            'attribute[type]': args.type,
            'attribute[involve]': args.involve,
            'attribute[problem_type]': args.problem_type,
            'attribute[workorder]': args.workorder,
            'attribue[applicationName]': args.applicationName,
            'attribute[applicationUrl]': args.applicationUrl,
            lat: args.lat,
            long: args.long,
            address_string: args.address_string,
            email: args.email,
            device_id: args.device_id,
            account_id: args.account_id,
            first_name: args.first_name,
            last_name: args.last_name,
            phone: args.phone,
            description: args.description,
            media_url: args.media_url
          }) 
        }).then(response => {
          return response.data[0]
        })
      }
    })
  })
})