import Axios from 'axios';
import cookies from 'next-cookies';

import { SESSION_REFRESH_ROUTE } from 'constants';
import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import removeCookieIsomorphic from 'utils/removeCookieIsomorphic';
import { userSignOutSuccess } from 'state/concepts/session/actions';

const refreshInterceptor = (ctx) => {
  let requestsPool = [];
  let isRefreshing = false;

  const subscribeToRefresh = (listener) => requestsPool.push(listener);

  const finishRefresh = (accessToken) => {
    requestsPool.map((listener) => listener(accessToken));
    isRefreshing = false;
    requestsPool = [];
  };

  return async (error) => {
    const retryConfig = error.response && error.response.config;

    if (error.response && retryConfig && error.response.status === 401) {
      const defferedOriginalRequest = new Promise((resolve, reject) => {
        // eslint-disable-next-line consistent-return
        subscribeToRefresh((accessToken) => {
          if (!accessToken) {
            return reject(error);
          }

          retryConfig.headers.Authorization = accessToken;
          resolve(Axios.request(retryConfig));
        });
      });

      if (isRefreshing) {
        return defferedOriginalRequest;
      }

      try {
        isRefreshing = true;
        const { tokens } = cookies(ctx);

        const response = await Axios.put(
          SESSION_REFRESH_ROUTE,
          {},
          { headers: { 'X-Refresh-Token': tokens?.refresh || null } },
        );

        setCookieIsomorphic(ctx, 'tokens', JSON.stringify(response.data.meta));

        const newAuthHeader = `Bearer ${response.data.meta.access}`;

        ctx.store.httpClient.defaults.headers.common.Authorization = `Bearer ${response.data.meta.access}`;

        finishRefresh(newAuthHeader);
      } catch (e) {
        ctx.store.httpClient.defaults.headers.common.Authorization = null;

        removeCookieIsomorphic(ctx, 'tokens');
        removeCookieIsomorphic(ctx, 'currentUser');

        ctx.store.dispatch(userSignOutSuccess());

        finishRefresh(null);
      }

      return defferedOriginalRequest;
    }

    return Promise.reject(error);
  };
};

export default refreshInterceptor;
