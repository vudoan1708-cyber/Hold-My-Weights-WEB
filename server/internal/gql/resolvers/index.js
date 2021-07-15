// Service Factory Model
const ServiceFactory = require('../models/serviceFactory');

// MongoDB Database Logic
const createData = require('../../handlers/mongodb/logic/createData');
const getAllData = require('../../handlers/mongodb/logic/getAllData');
// Database Models
const { Service } = require('../../handlers/mongodb/model');
const { EquipmentLists } = require('../../handlers/mongodb/model');

module.exports = class Resolver {
  constructor() {
    // Instantiate Only One Factory In Runtime
    this.serviceFactory = new ServiceFactory();
    this.services = [];
  }
  async LoadEquipmentLists() {
    // Talk To MongoDB to retrieve all equipment data
    return await getAllData(EquipmentLists);
  }
  async LoadServices() {
    // Talk To MongoDB to retrieve all service data
    return await getAllData(Service);
  }
  CreateService(serviceObj) {
    // Talk To MongoDB to create a service data
    return createData(Service, serviceObj);
  }
}
