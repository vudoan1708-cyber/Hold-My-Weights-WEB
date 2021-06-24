const querystring = require('querystring');

module.exports = (app) => {
  const SCOPE = process.env.SCOPE;

  const auth = () => Math.random().toString(36).slice(5, 11).toUpperCase();

  app.get('/login', (req, res) => {
    // get the randomly created string
    const AUTH_ID = auth();

    const QUERY = querystring.stringify({
      client_id: process.env.GOOGLE_OAUTH_CLIENT,
      redirect_uri: process.env.REDIRECT_URI || 'http://localhost:5000/callback',
      response_type: 'code',
      scope: SCOPE,
      include_granted_scopes: 'true',
      access_type: 'offline',
      state: AUTH_ID,
      prompt: 'consent select_account',
    });

    const BASE_URL = 'https://accounts.google.com/o/oauth2/v2/auth?';

    // Set Cookie for authenticating redirection
    res.cookie(process.env.STATE_KEY, AUTH_ID);

    // Redirect The Page Carrying The Payload Created Above
    res.redirect(`${BASE_URL}${QUERY}`);
  });
}
