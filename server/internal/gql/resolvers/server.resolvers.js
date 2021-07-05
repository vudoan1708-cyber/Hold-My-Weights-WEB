// Configure the connection to MongoDB
const createConnection = require('../../handlers/mongodb/connection/index');
createConnection();

// MongoDB Database Logic
const createData = require('../../handlers/mongodb/logic/createData');
const getAllData = require('../../handlers/mongodb/logic/getAllData');

// Top-Level Resolver
const Resolver = require('./index');

// Instantiate The Resolver Class To Instantiate Models
// And Use Them In This File
const resolver = new Resolver();

// GraphQL Resolvers
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
      // Find All Data from MongoDB Database
      getAllData();

      return services;
    },

    getService: (_, args) => {
      return resolver.services[args.id - 1].Get();
    }
  },

  Mutation: {
    // Add / Create A New Service
    createService: (_, args, { pubsub }) => {
      // Instantiate A New Service Model Through The Service Factory Model
      const newService = resolver.serviceFactory.NewService(args.input);
      // Add The Newly Created Service To The Array Stored in The Resolvers
      resolver.services.push(newService);
      // Publish The Event 'SERVICE_CREATED' to allow live update Using Subscription (Creating A Service)
      pubsub.publish('SERVICE_CREATED', { updateServiceAdded: newService });
      // Insert Data to MongoDB Database
      createData(newService);
      // Return The Newly Created Service
      return newService;
    },

    // Delete A Service
    deleteService: (_, args) => {
      const serviceID = args.input.id - 1;
      // Make A Copy of The Service
      const deletedService = resolver.services[serviceID].Get();
      // Dereference The Service By Setting it To Null
      resolver.services[serviceID] = null;
      // Remove it From The Array
      resolver.services.splice(serviceID, 1);
      // Return The Deleted Service
      return deletedService;
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
    editUserPhoto: (_, args) => {
      const chosenService = resolver.services[args.id - 1];
      chosenService.EditUserPhoto(args.value);
      return chosenService.Get();
    },
    editUserDateOfBirth: (_, args) => {
      const chosenService = resolver.services[args.id - 1];
      chosenService.EditUserDateOfBirth(args.value);
      return chosenService.Get();
    },

    // Edit The Entire User Info
    editUserDetail: (_, args) => {
      const chosenService = resolver.services[args.id - 1];
      chosenService.EditUserDetail(args);
      return chosenService.Get();
    },

    // Booked Equipment Info
    editEquipment: (_, args, { pubsub }) => {
      const chosenService = resolver.services[args.id - 1];
      chosenService.EditEquipment(args.input.booked, args.input.time);
      // Publish The Event 'EQUIPMENT_EDITTED' to allow live update Using Subscription (Editting Booked Equipment)
      pubsub.publish('EQUIPMENT_EDITTED', { updateServiceAdded: newService });
      return chosenService.Get();
    },

    editMultipleFields: (_, args) => {
      const options = args.options;
      const inputs = args.input;
      const chosenService = resolver.services[args.id - 1];

      // Loop Through The Options Array
      options.forEach((option) => {
        if (option === 'user') {
          chosenService.EditMultipleFields(inputs.user, null, null);
        } else if (option === 'equipment') {
          chosenService.EditMultipleFields(null, inputs.equipment.booked, inputs.equipment.time);
        }
      })
      return chosenService.Get();
    },
  },

  Subscription: {
    updateServiceAdded: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('SERVICE_CREATED'),
    },
    updateEquipment: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('EQUIPMENT_EDITTED'),
    },
  }
};
