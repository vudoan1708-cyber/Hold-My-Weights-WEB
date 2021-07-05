const { Service } = require('../model');

module.exports = (data) => {
  try {
    const serviceModel = new Service(data);

    serviceModel.save((err, doc) => {
      if (err) return console.error(err);
      return console.log(`Document inserted succussfully! ${doc}`);
    });
  } catch (err) {
    return console.error(`Error: ${err}`);
  }
}
