const setAuthorizationHeader = (httpClient, accessToken) => {
  httpClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`; // eslint-disable-line no-param-reassign
};

export default setAuthorizationHeader;
