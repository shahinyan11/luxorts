import { mergeDeepRight } from 'ramda';
import { UNAUTHORIZED } from 'http-status';

import ROUTES from 'constants/routes';

import setAuthorizationHeader from 'utils/setAuthorizationHeader';
import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import assignFormErrors from 'utils/form/assignFormErrors';
import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';

import { loginSuccessResponse } from 'state/concepts/session/__mocks__/loginResponse';
import { userValidateForgotPasswordCodeEndpoint } from 'state/concepts/session/endpoints';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { hideModal } from 'state/modal/actions';

import userValidateForgotPasswordCode from '../userValidateForgotPasswordCode';

jest.mock('utils/setCookieIsomorphic');
jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');
jest.mock('utils/setAuthorizationHeader');

describe('userValidateForgotPasswordCode operation', () => {
  let dispatch;

  const action = {
    values: {
      code: 'code',
      redirectRoute: 'redirectRoute',
      isModal: true,
    },
    form: {},
  };

  const body = {
    code: action.values.code,
  };

  const { endpoint, url } = userValidateForgotPasswordCodeEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userValidateForgotPasswordCode.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userValidateForgotPasswordCode).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response: loginSuccessResponse });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(3, hideModal());
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
      expect(redirect).toHaveBeenCalledWith(action.values.redirectRoute);
    });
  });

  it('shouldn`t dispatches hideModal when isModal is not true', () => {
    const httpClient = mockHttpClient({ method: 'post', response: loginSuccessResponse });
    const newAction = mergeDeepRight(action, {
      values: {
        isModal: false,
      },
    });

    dispatch.mockClear();

    userValidateForgotPasswordCode.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(dispatch).not.toHaveBeenCalledWith(hideModal());
  });

  it('shouldn`t redirects when redirectRoute isn`t present', () => {
    redirect.mockClear();
    const httpClient = mockHttpClient({ method: 'post', response: loginSuccessResponse });
    userValidateForgotPasswordCode.process(
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

    it('should redirects to /sign-in', () => {
      expect(redirect).toHaveBeenCalledWith(ROUTES.SIGN_IN.PATH);
    });
  });
});
