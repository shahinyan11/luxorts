import { mergeDeepRight } from 'ramda';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';
import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';

import response from 'state/concepts/listings/__mocks__/fetchListingAccomodationResponse';
import { userUpdatePasswordEndpoint } from 'state/concepts/session/endpoints';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { showMessage } from 'state/flash-messages/actions';

import userUpdatePassword from '../userUpdatePassword';

jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('userUpdatePassword operation', () => {
  let dispatch;

  const action = {
    values: {
      password: 'password',
      redirectRoute: 'redirectRoute',
      message: 'message',
    },
    form: {},
  };

  const body = {
    password: action.values.password,
  };

  const { endpoint, url } = userUpdatePasswordEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userUpdatePassword.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userUpdatePassword).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put' });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, body);
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
      expect(dispatch).toHaveBeenNthCalledWith(3, showMessage(action.values.message));
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.values.redirectRoute);
    });
  });

  it('shouldn`t dispatches showMessage when message isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      values: {
        message: null,
      },
    });

    dispatch.mockClear();

    userUpdatePassword.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(dispatch).not.toHaveBeenCalledWith(showMessage(action.values.message));
  });

  it('shouldn`t redirects when redirectRoute isn`t present', () => {
    redirect.mockClear();
    const httpClient = mockHttpClient({ method: 'put' });
    userUpdatePassword.process(
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
      method: 'put',
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
});
