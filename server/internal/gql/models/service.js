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

  GetID() {
    return this.id;
  }
  Get() {
    return this;
  }

  // Edit User Info
  EditUserName(name) {
    if (name !== '') this.user.name = name;
    else this.user.name = 'N/A';
  }
  EditUserEmail(email) {
    if (email !== '') this.user.email = email;
    else this.user.email = 'No Email Provided';
  }
  EditUserDateOfBirth(dob) {
    if (dob !== '') this.user.dateOfBirth = dob;
    else this.user.dateOfBirth = 'No Birthday Provided';
  }

  // Edit Booked Equipment Info
  EditEquipment(bookedEquipment, bookedTime) {
    this.equipment.booked = bookedEquipment;
    this.equipment.time = bookedTime;
  }
}
