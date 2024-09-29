import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { mergeDeepRight } from 'ramda';
import { UNAUTHORIZED } from 'http-status';

import { USER_LOGIN_REDIRECT_BY_STATUS, USER_VERIFIED_STATUS } from 'constants';
import { ACCOUNT_STATUS } from 'constants/statuses';

import setAuthorizationHeader from 'utils/setAuthorizationHeader';
import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import assignFormErrors from 'utils/form/assignFormErrors';
import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';

import { userSignInSuccess } from 'state/concepts/session/actions';
import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { signInUserEndpoint } from 'state/concepts/session/endpoints';
import { showModal } from 'state/modal/actions';
import { loginSuccessResponse } from 'state/concepts/session/__mocks__/loginResponse';

import userSignIn from '../userSignIn';

jest.mock('utils/setCookieIsomorphic');
jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');
jest.mock('utils/setAuthorizationHeader');

describe('userSignIn operation', () => {
  let dispatch;

  const action = {
    values: {
      email: 'email',
      password: 'password',
      redirectRoute: 'redirectRoute',
    },
    form: {
      setErrors: jest.fn(),
      setStatus: jest.fn(),
    },
  };

  const body = {
    email: action.values.email,
    password: action.values.password,
  };

  const { endpoint, url } = signInUserEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userSignIn.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userSignIn).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response: loginSuccessResponse });

    const response = normalize(loginSuccessResponse.data);

    const user = build(response, 'travellerAccount', loginSuccessResponse.data.data.id);
    const currentUser = { ...user, userType: loginSuccessResponse.data.data.type };

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, userSignInSuccess(currentUser));
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        dataApiSuccess({
          endpoint,
          response,
        }),
      );
    });

    it('sets tokens', () => {
      const tokens = loginSuccessResponse.data.meta;

      expect(setCookieIsomorphic).toHaveBeenCalledTimes(2);

      expect(setCookieIsomorphic).toHaveBeenNthCalledWith(
        1,
        null,
        'currentUser',
        JSON.stringify(currentUser),
      );
      expect(setCookieIsomorphic).toHaveBeenNthCalledWith(
        2,
        null,
        'tokens',
        JSON.stringify(tokens),
      );
      expect(setAuthorizationHeader).toHaveBeenCalledWith(
        httpClient,
        loginSuccessResponse.data.meta.access,
      );
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.values.redirectRoute);
    });
  });

  it('should calls redirect with verification route when user account is unverified', async () => {
    const httpClient = mockHttpClient({
      method: 'post',
      response: mergeDeepRight(loginSuccessResponse, {
        data: {
          data: {
            attributes: {
              verified_status: USER_VERIFIED_STATUS.UNVERIFIED,
            },
          },
        },
      }),
    });

    await userSignIn.process(
      {
        httpClient,
        action,
      },
      dispatch,
      jest.fn(),
    );

    const redirectRoute = USER_LOGIN_REDIRECT_BY_STATUS[USER_VERIFIED_STATUS.UNVERIFIED];

    expect(redirect).toHaveBeenCalledWith(redirectRoute);
  });

  describe('success when account is deactivated by user', () => {
    const httpClient = mockHttpClient({
      method: 'post',
      response: mergeDeepRight(loginSuccessResponse, {
        data: {
          data: {
            attributes: {
              status: ACCOUNT_STATUS.DEACTIVATED_BY_USER,
            },
          },
        },
      }),
    });

    beforeEach(beforeFunction(httpClient));

    it('should show modal with modalType DEACTIVATED_BY_USER_MODAL', () => {
      expect(dispatch).toHaveBeenCalledWith(
        showModal({
          modalType: 'DEACTIVATED_BY_USER_MODAL',
        }),
      );
    });

    it('shouldn`t redirects', () => {
      expect(redirect).not.toHaveBeenCalled();
    });
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'post',
      response: error,
      reject: true,
    });

    beforeEach(beforeFunction(httpClient));

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataApiFailure({ endpoint }));
    });

    it('sets errors', () => {
      expect(assignFormErrors).toHaveBeenCalledWith(action.form, error);
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });

  describe('failure when errors response status equals 401', () => {
    const httpClient = mockHttpClient({
      method: 'post',
      response: {
        response: {
          status: UNAUTHORIZED,
        },
      },
      reject: true,
    });

    beforeEach(beforeFunction(httpClient));

    it('should shows modal with modalType DEACTIVATED_BY_ADMIN_MODAL', () => {
      expect(dispatch).toHaveBeenCalledWith(
        showModal({
          modalType: 'DEACTIVATED_BY_ADMIN_MODAL',
        }),
      );
    });

    it('shouldn`t calls showErrorNotifications ', () => {
      expect(showErrorNotifications).not.toHaveBeenCalled();
    });
  });
});
