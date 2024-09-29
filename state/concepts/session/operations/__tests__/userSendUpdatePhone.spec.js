import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import userSendUpdatePhoneOperation from 'state/concepts/session/operations/userSendUpdatePhone';
import { userSendUpdatePhoneEndpoint } from 'state/concepts/session/endpoints';
import userSendUpdatePhoneResponse from 'state/concepts/session/__mocks__/userSendUpdatePhoneResponse';

jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('userSendUpdatePhone operation', () => {
  let dispatch;

  const action = {
    values: {
      phone_number: 'phone_number',
    },
    form: {},
  };

  const body = {
    phone_number: action.values.phoneNumber,
  };

  const { endpoint, url } = userSendUpdatePhoneEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userSendUpdatePhoneOperation.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userSendUpdatePhoneOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response: userSendUpdatePhoneResponse });
    const response = normalize(userSendUpdatePhoneResponse.data, { endpoint });

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
          response,
        }),
      );
    });
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
  });
});
