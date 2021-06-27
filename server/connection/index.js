const mongoose = require('mongoose');

module.exports = async function createConnection() {
  const MONGODB_URI = process.env.MONGODB_URI;

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log(`Connect to MongoDB Database successfully`);
    return database;
  } catch (err) {
    console.log(`Err ${err}`);
    return err;
  }
}
