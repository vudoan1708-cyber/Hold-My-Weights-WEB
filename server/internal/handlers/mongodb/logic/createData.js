module.exports = (Collection, data) => {
  try {
    const serviceModel = new Collection(data);

    serviceModel.save((err, doc) => {
      if (err) return console.error(err);
      return console.log(`Document inserted succussfully! ${doc}`);
    });
  } catch (err) {
    return console.error(`Error: ${err}`);
  }
}
