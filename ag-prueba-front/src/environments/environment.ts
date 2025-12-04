import { globalConfig } from './environment.global';

export const environment = {
  production: false,
  authorized_uri: `${globalConfig.authServerUrl}/oauth2/authorize?`,
  client_id: globalConfig.clientId,
  redirect_uri: globalConfig.redirectUri,
  scope: 'openid profile',
  response_type: 'code',
  response_mode: 'form_post',
  code_challenge_method: 'S256',
  token_url: `${globalConfig.authServerUrl}/oauth2/token`,
  grant_type: 'authorization_code',
  resource_url: `${globalConfig.apiBaseUrl}/resource/`,
  logout_url: `${globalConfig.authServerUrl}/logout`,
  secret_pkce: process.env.SECRET_PKCE || 'secret'
};
