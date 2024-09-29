import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';
import build from 'redux-object';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';
import redirect from 'utils/redirect';
import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { verifyUserEmailEndpoint } from 'state/concepts/session/endpoints';
import { updateUser } from 'state/concepts/session/actions';
import response from 'state/concepts/session/__mocks__/verifyEmailResponse';

import verifyUserEmail from '../verifyUserEmail';

jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('verifyUserEmail operation', () => {
  let dispatch;

  const action = {
    values: {
      code: '1234',
      redirectRoute: 'redirectRoute',
    },
    form: {},
  };

  const body = {
    code: action.values.code,
  };

  const { endpoint, url } = verifyUserEmailEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    verifyUserEmail.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(verifyUserEmail).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response });

    const normalizedResponse = normalize(response.data);

    const userData = build(normalizedResponse, 'travellerAccount', response.data.data.id);

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, updateUser(userData));
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        dataApiSuccess({
          endpoint,
          response: normalizedResponse,
        }),
      );
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.values.redirectRoute);
    });
  });

  it('shouldn`t call redirect when redirectRoute isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'post', response });
    const newAction = mergeDeepRight(action, {
      values: {
        redirectRoute: null,
      },
    });

    redirect.mockClear();

    verifyUserEmail.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(redirect).not.toHaveBeenCalled();
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'post',
      reject: true,
      response: error,
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
