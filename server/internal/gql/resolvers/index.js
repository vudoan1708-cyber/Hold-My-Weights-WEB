// Service Factory Model
const ServiceFactory = require('../models/serviceFactory');

module.exports = class Resolver {
  constructor() {
    // Instantiate Only One Factory In Runtime
    this.serviceFactory = new ServiceFactory();
    this.services = [];
  }
  loadServices() {
    // Talk To MongoDB to retrieve all service data

    // Append To Services Array
    // this.services.push();
  }
}
