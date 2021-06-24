// Top-Level Resolver
const Resolver = require('./index');

// Array
// const { sortArray } = require('../../logic/array');

// // Binary Search Algorithm
// const binarySearch = require('../../logic/algorithm/binarySearch');

// Instantiate The Resolver Class To Instantiate Models
// And Use Them In This File
const resolver = new Resolver();

module.exports = resolvers = {
  Query: {
    node: (_, args) => {
      return resolver.services[args.id - 1].GetID();
    },

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
      return resolver.services[args.id - 1].Get();
    }
  },

  Mutation: {
    createService: (_, args) => {
      // Instantiate A New Service Model Through The Service Factory Model
      const newService = resolver.serviceFactory.NewService(args.input);
      // Add The Newly Created Service To The Array Stored in The Resolvers
      resolver.services.push(newService);
      // Return The Newly Created Service
      return newService;
    },

    // EDIT SERVICE INFO
    // User Info
    editUserName: (_, args) => {
      const chosenService = resolver.services[args.id - 1];
      chosenService.EditUserName(args.value);
      return chosenService.Get();
    },
    editUserEmail: (_, args) => {
      const chosenService = resolver.services[args.id - 1];
      chosenService.EditUserEmail(args.value);
      return chosenService.Get();
    },
    editUserDateOfBirth: (_, args) => {
      const chosenService = resolver.services[args.id - 1];
      chosenService.EditUserDateOfBirth(args.value);
      return chosenService.Get();
    },

    // Booked Equipment Info
    editEquipment: (_, args) => {
      const chosenService = resolver.services[args.id - 1];
      chosenService.EditEquipment(args.input.booked, args.input.time);
      return chosenService.Get();
    },
  }
};
