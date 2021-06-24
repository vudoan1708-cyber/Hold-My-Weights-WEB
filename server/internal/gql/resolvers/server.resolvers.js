// Top-Level Resolver
const Resolver = require('./index');

// Array
const sortArray = require('../../logic/array');

// Binary Search Algorithm
const binarySearch = require('../../logic/algorithm/binarySearch');

// Instantiate The Resolver Class
const resolver = new Resolver();
console.log(resolver);

module.exports = resolvers = {
  Query: {
    getServices: () => {
      const services = [];
      if (resolver.services.length > 0) {
        // Loop Through The Array of Services from The Resolvers
        resolver.services.forEach((service) => {
          services.push(service);
        });
      }

      return services;
    },

    getService: (_, args) => {
      console.log(args);
      // Sort The Array
      const sortedServices = sortArray(resolver.services)
      // Perform Binary Search
      const index = binarySearch(sortedServices, args.id);
      return sortedServices[index];
    }
  },

  Mutation: {
    createService: () => {
      // Add The Newly Created Service TO The Array Stored in The Resolvers
      // resolver.services.push();
    }
  }
};
