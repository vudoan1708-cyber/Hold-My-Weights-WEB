// Service Model
const Service = require('./service');

module.exports = class ServiceFactory {
  constructor() {
    this.serviceCnt = 0;
  }

  NewService(args) {
    // Count up The Total Number of Services In Runtime
    this.serviceCnt += 1;

    // Destructure The Passed Argument
    const { user_id, name, email, dateOfBirth } = args.user;
    const { booked, time } = args.equipment;

    // Instantiate A New Service
    const newService = new Service(this.serviceCnt, user_id, name, email, dateOfBirth,
                                  booked, time);
    return newService;
  }
}
