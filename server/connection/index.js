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

    db.on('error', console.error.bind(console, 'connection error:'));
    console.log(`Connect to MongoDB Database via Mongoose successfully`);
    return db;
  } catch (err) {
    console.log(`Err ${err}`);
    return err;
  }
}
