const getUser = require('../handlers/google/getUser');

module.exports = (app) => {
  app.get('/google/user', async(req, res) => {
    const { token } = req.query;
    const user = await getUser(token);
    res.json(user);
  });
}
