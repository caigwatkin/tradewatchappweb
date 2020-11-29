const axios = require('axios')

const TRADEME_USER_API_AUTHORIZATION = `OAuth oauth_callback="${process.env.REACT_APP_URL}", oauth_consumer_key="${process.env.REACT_APP_TRADEME_CONSUMER_KEY}", oauth_signature_method="PLAINTEXT", oauth_signature="${process.env.REACT_APP_TRADEME_CONSUMER_SECRET}&"`
const TRADEME_USER_API_URL =
  'https://cors-anywhere.herokuapp.com/https://secure.tmsandbox.co.nz'

const trademeUserApiClient = axios.create({
  baseURL: TRADEME_USER_API_URL,
  headers: {
    Accept: 'application/json',
    Authorization: TRADEME_USER_API_AUTHORIZATION,
  },
})

export async function trademeOauthRequestTokenPost() {
  const response = await trademeUserApiClient.post(
    `/Oauth/RequestToken?scope=MyTradeMeRead`
  )

  return response
}
