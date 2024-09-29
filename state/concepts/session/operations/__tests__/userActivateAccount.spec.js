import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { mergeDeepRight } from 'ramda';

import { USER_LOGIN_REDIRECT_BY_STATUS, USER_VERIFIED_STATUS } from 'constants';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import redirect from 'utils/redirect';
import showErrorNotifications from 'utils/showErrorNotifications';

import { updateUser } from 'state/concepts/session/actions';
import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { userAccountActivationEndpoint } from 'state/concepts/session/endpoints';
import { hideModal } from 'state/modal/actions';
import response from 'state/concepts/session/__mocks__/userActivateAccountResponse';

import userActivateAccount from '../userActivateAccount';

jest.mock('utils/redirect');
jest.mock('utils/showErrorNotifications');

describe('userActivateAccount operation', () => {
  let dispatch;

  const action = {
    redirectRoute: 'redirectRoute',
    isModal: true,
  };

  const { endpoint, url } = userAccountActivationEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userActivateAccount.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userActivateAccount).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response });

    const normalizedResponse = normalize(response.data);

    const userData = build(normalizedResponse, 'travellerAccount', response.data.data.id);

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(4);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, updateUser(userData));
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        dataApiSuccess({
          endpoint,
          response: normalizedResponse,
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(4, hideModal());
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.redirectRoute);
    });
  });

  it('should calls redirect with verification route when user account is unverified', async () => {
    const httpClient = mockHttpClient({
      method: 'post',
      response: mergeDeepRight(response, {
        data: {
          data: {
            attributes: {
              verified_status: USER_VERIFIED_STATUS.UNVERIFIED,
            },
          },
        },
      }),
    });

    await userActivateAccount.process(
      {
        httpClient,
        action: {
          ...action,
          redirectRoute: null,
        },
      },
      dispatch,
      jest.fn(),
    );

    const redirectRoute = USER_LOGIN_REDIRECT_BY_STATUS[USER_VERIFIED_STATUS.UNVERIFIED];

    expect(redirect).toHaveBeenCalledWith(redirectRoute);
  });

  it('shouldn`t calls redirect when redirectRoute isn`t present', () => {
    redirect.mockClear();
    const httpClient = mockHttpClient({ method: 'post', response });
    userActivateAccount.process(
      {
        httpClient,
        action: {
          ...action,
          redirectRoute: null,
        },
      },
      dispatch,
      jest.fn(),
    );

    expect(redirect).not.toHaveBeenCalled();
  });

  it('shouldn`t dispatch hideModal when isModal equals false', () => {
    dispatch.mockClear();
    const httpClient = mockHttpClient({ method: 'post', response });
    userActivateAccount.process(
      {
        httpClient,
        action: {
          ...action,
          isModal: false,
        },
      },
      dispatch,
      jest.fn(),
    );

    expect(dispatch).not.toHaveBeenCalledWith(hideModal());
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
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
