import Axios from 'axios';
import { SESSION_REFRESH_ROUTE } from 'constants';

import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import removeCookieIsomorphic from 'utils/removeCookieIsomorphic';
import { userSignOutSuccess } from 'state/concepts/session/actions';

import refreshInterceptor from '../refreshInterceptor';

const mockRetryRequest = (config) => ({ mock: 'retried request', config });
jest.mock('axios', () => ({
  request: jest.fn((config) => mockRetryRequest(config)),
  put: jest.fn(),
}));
const mockRefreshToken = 'refresh token mock';
const mockCookies = {
  tokens: {
    access: 'access token mock',
    refresh: mockRefreshToken,
  },
};
jest.mock('next-cookies', () => jest.fn(() => mockCookies));
jest.mock('utils/redirect');
jest.mock('utils/setCookieIsomorphic');
jest.mock('utils/removeCookieIsomorphic');

describe('refreshInterceptor() creates interceptor that', () => {
  const ctx = {
    res: jest.fn(),
    store: {
      httpClient: {
        defaults: {
          headers: {
            common: {
              Authorization: 'old token',
            },
          },
        },
      },
      dispatch: jest.fn(),
    },
  };

  const makeError = (status, url = 'url') => ({
    response: {
      config: {
        headers: {
          Authorization: 'old token',
          url,
        },
      },
      status,
    },
  });

  let interceptorInstance = null;

  beforeEach(() => {
    Axios.put.mockClear();
    Axios.request.mockClear();
    interceptorInstance = refreshInterceptor(ctx);
  });

  const refreshResponse = {
    data: { meta: { access: 'new access token' } },
  };

  describe('Does not refresh', () => {
    it('when error.response is not defined', () => {
      const error = {};
      expect(interceptorInstance(error)).rejects.toEqual(error);
    });

    it('when error.response.config is not defined', () => {
      const error = { response: {} };
      expect(interceptorInstance(error)).rejects.toEqual(error);
    });

    it('when error.response.status is other than 401', () => {
      const error = makeError(422);
      expect(interceptorInstance(error)).rejects.toEqual(error);
    });
  });

  describe('Refresh', () => {
    const error = makeError(401);
    const requestErrors = [makeError(401, '1'), makeError(401, '2'), makeError(401, '3')];

    it('single error ', async () => {
      Axios.put.mockImplementationOnce(() => Promise.resolve(refreshResponse));
      Axios.request.mockImplementationOnce((config) => ({ mock: 'retried request', config }));

      await expect(interceptorInstance(error)).resolves.toEqual(
        mockRetryRequest(error.response.config),
      );

      const { access } = refreshResponse.data.meta;

      expect(Axios.put).toHaveBeenCalledWith(
        SESSION_REFRESH_ROUTE,
        {},
        { headers: { 'X-Refresh-Token': mockRefreshToken } },
      );
      expect(setCookieIsomorphic).toHaveBeenCalledWith(
        ctx,
        'tokens',
        JSON.stringify(refreshResponse.data.meta),
      );
      expect(ctx.store.httpClient.defaults.headers.common.Authorization).toEqual(
        `Bearer ${access}`,
      );
      expect(error.response.config.headers.Authorization).toEqual(`Bearer ${access}`);
      expect(Axios.request).toHaveBeenCalledWith(error.response.config);
    });

    it('multiple errors', async () => {
      let resolveRefreshRequest;

      const makeResolveRefreshRequest = (resolve) => () => resolve(refreshResponse);
      const refreshRequestPromise = new Promise((resolve) => {
        resolveRefreshRequest = makeResolveRefreshRequest(resolve);
      });

      Axios.put.mockImplementationOnce(() => refreshRequestPromise);
      const requestExpectations = requestErrors.map((requestError) =>
        expect(interceptorInstance(requestError)).resolves.toEqual(
          mockRetryRequest(requestError.response.config),
        ),
      );
      resolveRefreshRequest();

      await Promise.all(requestExpectations);

      const { access } = refreshResponse.data.meta;

      requestErrors.forEach((requestError, index) => {
        expect(requestError.response.config.headers.Authorization).toEqual(`Bearer ${access}`);
        expect(Axios.request).toHaveBeenNthCalledWith(index + 1, requestError.response.config);
      });
    });

    it('clear cookies when session was over', async () => {
      let rejectRefreshRequest;
      const makeRejectRefreshRequest = (reject) => () => reject(refreshResponse);
      const refreshRequestPromise = new Promise((resolve, reject) => {
        rejectRefreshRequest = makeRejectRefreshRequest(reject);
      });
      Axios.put.mockImplementationOnce(() => refreshRequestPromise);
      const requestExpectations = requestErrors.map((requestError) =>
        expect(interceptorInstance(requestError)).rejects.toEqual(requestError),
      );
      rejectRefreshRequest();
      await Promise.all(requestExpectations);

      expect(Axios.put).toHaveBeenCalledWith(
        SESSION_REFRESH_ROUTE,
        {},
        { headers: { 'X-Refresh-Token': mockRefreshToken } },
      );
      expect(removeCookieIsomorphic).toHaveBeenCalledTimes(2);
      expect(removeCookieIsomorphic).toHaveBeenNthCalledWith(1, ctx, 'tokens');
      expect(removeCookieIsomorphic).toHaveBeenNthCalledWith(2, ctx, 'currentUser');
      expect(ctx.store.httpClient.defaults.headers.common.Authorization).toBe(null);
      expect(ctx.store.dispatch).toHaveBeenCalledWith(userSignOutSuccess());
      expect(Axios.request).toHaveBeenCalledTimes(0);
    });
  });
});
