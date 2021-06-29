const mongoose = require('mongoose');

// Schema
const { Schema, model } = mongoose;

const requiredString = {
  type: String,
  required: true,
}

const User = {
  user_id: requiredString,
  name: requiredString,
  email: requiredString,
  photo: requiredString,
  dateOfBirth: Date,
}

const Equipment = {
  
}

const Service = {
  id: String || Int16Array,
  user: {
    type: User,
    required: true,
  },
  equipment: {
    type: Equipment,
    required: true,
  },
  created_at: Date,
}

const serviceSchema = Schema({
  Service
});

module.exports = model('SERVICE', serviceSchema);
