const {
  useFetch,
  useFetchWithAuthorisation,
} = require('../../logic/useFetch');

module.exports = async function getUser(TOKEN) {
  const OPENID_BASE_URL = 'https://accounts.google.com/.well-known/openid-configuration';
  const openid_response = await useFetch(OPENID_BASE_URL, 'GET');

  const { userinfo_endpoint } = openid_response;
  const response = await useFetchWithAuthorisation(userinfo_endpoint, 'GET', TOKEN);

  return response;
}
