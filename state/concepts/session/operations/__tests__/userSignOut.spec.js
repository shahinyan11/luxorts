import ROUTES from 'constants/routes';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import removeCookieIsomorphic from 'utils/removeCookieIsomorphic';
import redirect from 'utils/redirect';
import showErrorNotifications from 'utils/showErrorNotifications';

import { userSignOutSuccess } from 'state/concepts/session/actions';
import { signOutUserEndpoint } from 'state/concepts/session/endpoints';

import userSignOut from '../userSignOut';

jest.mock('utils/removeCookieIsomorphic');
jest.mock('utils/redirect');
jest.mock('utils/showErrorNotifications');
jest.mock('component-cookie', () => jest.fn(() => JSON.stringify({ refresh: 'refreshToken' })));

describe('userSignOut operation', () => {
  let dispatch;

  const beforeFunction = (httpClient) => () => {
    dispatch = jest.fn();
    userSignOut.process({ httpClient }, dispatch, jest.fn());
  };

  const { url } = signOutUserEndpoint;

  it('matches snapshot', () => {
    expect(userSignOut).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'delete' });

    beforeEach(beforeFunction(httpClient));

    it('removes cookies', () => {
      expect(removeCookieIsomorphic).toHaveBeenCalledTimes(2);
      expect(removeCookieIsomorphic).toHaveBeenNthCalledWith(1, null, 'tokens');
      expect(removeCookieIsomorphic).toHaveBeenNthCalledWith(2, null, 'currentUser');
    });

    it('calls right endpoint with right params', () => {
      expect(httpClient.delete).toHaveBeenCalledWith(url, {
        headers: {
          'X-Refresh-Token': 'refreshToken',
        },
      });
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledWith(userSignOutSuccess());
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(ROUTES.INDEX.PATH);
    });
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'delete',
      reject: true,
      response: error,
    });

    beforeEach(beforeFunction(httpClient));

    it('sets errors', () => {
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
