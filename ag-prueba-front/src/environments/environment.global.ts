export const globalConfig = {
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8080',
  authServerUrl: process.env.AUTH_SERVER_URL || 'http://localhost:9000',
  clientId: process.env.CLIENT_ID || 'client',
  redirectUri: process.env.REDIRECT_URI || 'http://127.0.0.1:4200/authorized',
};
