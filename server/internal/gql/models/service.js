module.exports = class Service {
  constructor(service_id, user_id, user_name, user_email, dateOfBirth,
              bookedEquipment, bookedTime) {
    this.id = service_id;
    this.user = {
      user_id,
      name: user_name,
      email: user_email,
      dateOfBirth,
    };
    // An Array of Booked Equipment and Time
    this.equipment = {
      booked: bookedEquipment,
      time: bookedTime
    },
    this.created_at = new Date();
  }

  Get() {
    return this;
  }
}
