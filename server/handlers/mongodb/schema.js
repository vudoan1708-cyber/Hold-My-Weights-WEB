module.exports.User = {
  user_id: String,
  name: String,
  email: String,
  photo: String,
  dateOfBirth: Date,
}

module.exports.Equipment = {
  
}

module.exports.serviceSchema = {
  id: String || Int16Array,
  user: {
    type: Map,
    of: this.User,
  },
  equipment: {
    type: Map,
    of: this.Equipment,
  },
  created_at: Date,
}
