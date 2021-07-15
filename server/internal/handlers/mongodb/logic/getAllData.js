module.exports = async(Collection) => {
  let response = null;
  try {
    await Collection.find({}, (err, doc) => {
      if (err) response = err;
      response = doc;
    });
  } catch (err) {
    response = err;
  }

  return response;
}
