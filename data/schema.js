const axios = require('axios');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList } = require('graphql');

// This calls for an environment variable that contains your Petfinder key. You can either replace this with a string
// that contains your petfinder key or set it as an environment variable on the machine you are running the server on.
//var petfinderKey = process.env.petfinder_key ;
var apiKey = '5abaa60bb4977';
var baseUrl = 'https://bloomington.in.gov/crm-test/open311/v2/';

var getServiceListUrl = baseUrl + 'services.json'

//var randomPetUrl = baseUrl + 'pet.getRandom';
//var breedListUrl = baseUrl + 'breed.list';
//var petUrl = baseUrl + 'pet.get';
//var petFindUrl = baseUrl + 'pet.find'
// var shelterUrl = baseUrl + 'shelter.get';
// var shelterFindUrl = baseUrl + 'shelter.find';
// var shelterGetPetsUrl = baseUrl + 'shelter.getPets';
// var shelterListByBreedUrl = baseUrl + 'shelter.listByBreed';

const ServiceType = require('./types/service_type');

// const PetType = require('./types/pet_type');
// const BreedType = require('./types/breed_type');
// const ShelterType = require('./types/shelter_type');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({    
      serviceList: {
        type: new GraphQLList(ServiceType),
        description: "provide a list of acceptable 311 service request types and their associated service codes. These request types can be unique to the city/jurisdiction.",
      },
      resolve: (root, args) => axios.get(getServiceListUrl)
        .then(response => {
          console.dir(response.data)
          return response.data
        })
    })
  })
})