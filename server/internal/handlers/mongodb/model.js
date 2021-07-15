const mongoose = require('mongoose');

// Schema
const { Schema, model } = mongoose;

const requiredString = {
  type: String,
  required: true,
}
const requiredArrayString = {
  type: [String],
  required: true,
}

// EQUIPMENT Schema
const equipmentSchema = new Schema({
  name: requiredString,
  description: requiredString,
  type: requiredString,
  photo: requiredString,
  dateOfPublish: String,
  barcode: requiredString,
  bookedTime: requiredArrayString,
})
// SERVICE Schema
const serviceSchema = new Schema({
  id: String || Int16Array,
  user: {
    user_id: requiredString,
    name: requiredString,
    email: requiredString,
    photo: requiredString,
    dateOfBirth: String,
  },
  equipment: {
    booked: [{
      _id: false,
      name: requiredString,
      description: requiredString,
      type: requiredString,
      photo: requiredString,
      dateOfPublish: String,
      barcode: requiredString,
      bookedTime: requiredArrayString,
    }],
    time: {
      expected_time: requiredArrayString,
      finishing_time: [String],
    }
  },
  created_at: String,
});

module.exports.Service = model('SERVICE', serviceSchema, 'user_service');
module.exports.EquipmentLists = model('EQUIPMENT', equipmentSchema, 'equipment_lists');
