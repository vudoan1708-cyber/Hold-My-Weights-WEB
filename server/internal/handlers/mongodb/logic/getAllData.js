const { Service } = require('../model');

module.exports = () => {
  try {
    Service.find((err, doc) => {
      if (err) return console.error(err);
      return console.log(`Document found succussfully! ${doc}`);
    });
  } catch (err) {
    return console.error(`Error: ${err}`);
  }
}
