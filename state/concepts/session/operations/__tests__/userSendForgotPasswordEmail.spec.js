import { mergeDeepRight } from 'ramda';

import setAuthorizationHeader from 'utils/setAuthorizationHeader';
import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import assignFormErrors from 'utils/form/assignFormErrors';
import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';
import { createRoute } from 'utils/createRouteHelpers';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userSendForgotPasswordEmailEndpoint } from 'state/concepts/session/endpoints';
import { loginSuccessResponse } from 'state/concepts/session/__mocks__/loginResponse';

import userSendForgotPasswordEmail from '../userSendForgotPasswordEmail';

jest.mock('utils/setCookieIsomorphic');
jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');
jest.mock('utils/setAuthorizationHeader');

describe('userSendForgotPasswordEmail operation', () => {
  let dispatch;

  const beforeFunction = (httpClient, action) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userSendForgotPasswordEmail.process({ httpClient, action }, dispatch, jest.fn());
  };

  const action = {
    values: {
      email: 'email',
      redirectRoute: 'redirectRoute',
    },
    form: {},
  };

  const body = {
    email: action.values.email,
  };

  const { endpoint, url } = userSendForgotPasswordEmailEndpoint;

  it('matches snapshot', () => {
    expect(userSendForgotPasswordEmail).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response: loginSuccessResponse });

    beforeEach(beforeFunction(httpClient, action));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
        }),
      );
    });

    it('sets tokens', () => {
      const tokens = loginSuccessResponse.data.meta;

      expect(setCookieIsomorphic).toHaveBeenCalledWith(null, 'tokens', JSON.stringify(tokens));
      expect(setAuthorizationHeader).toHaveBeenCalledWith(
        httpClient,
        loginSuccessResponse.data.meta.access,
      );
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(
        createRoute({
          pathname: action.values.redirectRoute,
          query: {
            email: action.values.email,
          },
        }),
      );
    });
  });

  it('shouldn`t redirects when redirectRoute isn`t present', () => {
    redirect.mockClear();
    const httpClient = mockHttpClient({ method: 'post', response: loginSuccessResponse });
    userSendForgotPasswordEmail.process(
      {
        httpClient,
        action: mergeDeepRight(action, {
          values: {
            redirectRoute: null,
          },
        }),
      },
      dispatch,
      jest.fn(),
    );

    expect(redirect).not.toHaveBeenCalled();
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'post',
      response: error,
      reject: true,
    });

    beforeEach(beforeFunction(httpClient, action));

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataApiFailure({ endpoint }));
    });

    it('sets errors', () => {
      expect(assignFormErrors).toHaveBeenCalledWith(action.form, error);
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });

    describe('when form isn`t present shouldn`t calls', () => {
      const newAction = mergeDeepRight(action, { form: null });

      beforeEach(beforeFunction(httpClient, newAction));

      it('assignFormErrors helper', () => {
        expect(assignFormErrors).not.toHaveBeenCalled();
      });
    });
  });
});
