const querystring = require('querystring');

const { useFetch } = require('../internal/logic/useFetch');

module.exports = (app) => {
  // Env Variables
  const STATE_KEY = process.env.STATE_KEY;

  app.get('/callback', async (req, res) => {
    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[STATE_KEY] : null;

    // options instance
    if (state === null || state !== storedState) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    } else {
      res.clearCookie(STATE_KEY);

      try {
        const POST_OPTIONS = {
          code: code,
          grant_type: 'authorization_code',
          client_id: process.env.GOOGLE_OAUTH_CLIENT,
          client_secret: process.env.GOOGLE_OAUTH_SECRET,
          redirect_uri: process.env.REDIRECT_URI || 'http://localhost:5000/callback',
        };
  
        const BASE_URL = 'https://oauth2.googleapis.com/token';
  
        const response = await useFetch(`${BASE_URL}`, 'POST', POST_OPTIONS);
        const { access_token } = response;

        const FRONTEND_URI = process.env.FRONTEND_URI || 'http://localhost:3000/#/home';

        res.redirect(`${FRONTEND_URI}?access_token=${access_token}`);
      } catch (err) {
        res.redirect('/#' +
          querystring.stringify({
            error: err,
        }));
      }
    }
  });
}
