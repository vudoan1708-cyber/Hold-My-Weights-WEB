const isEmpty = require('../../logic/object');

module.exports = class Service {
  constructor(service_id,
              user_id, user_name, user_email, photo, dateOfBirth,
              bookedEquipment, bookedTime) {
    this.id = service_id;
    this.user = {
      user_id,
      name: user_name,
      email: user_email,
      photo,
      dateOfBirth,
    };
    // An Array of Booked Equipment and Time
    this.equipment = {
      booked: bookedEquipment,
      time: bookedTime
    },
    this.created_at = new Date().toLocaleString();
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
  EditUserPhoto(photo) {
    if (photo !== '') this.user.photo = photo;
    else if (photo === '' || photo === '#') this.user.photo = '#';
  }
  EditUserDateOfBirth(dob) {
    if (dob !== '') this.user.dateOfBirth = dob;
    else this.user.dateOfBirth = 'No Birthday Provided';
  }

  // Edit The Entire User Info
  EditUserDetail(args) {
    if (!isEmpty(args)) this.user = args.input;
    else this.user = this.user;
  }

  // Edit Booked Equipment Info
  EditEquipment(bookedEquipment, bookedTime) {
    this.equipment.booked = bookedEquipment;
    this.equipment.time = bookedTime;
  }

  // Edit Multiple Fields
  EditMultipleFields(userDetail, bookedEquipment, bookedTime) {
    this.user = userDetail !== null ? userDetail : this.user;
    this.equipment.booked = bookedEquipment !== null ? bookedEquipment : this.equipment.booked;
    this.equipment.time = bookedTime !== null ? bookedTime : this.equipment.time;
  }
}
