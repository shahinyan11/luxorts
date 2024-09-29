import normalize from 'json-api-normalizer';
import build from 'redux-object';

import showErrorNotifications from 'utils/showErrorNotifications';
import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';

import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';
import { updateUser } from 'state/concepts/session/actions';
import { showMessage } from 'state/flash-messages/actions';
import userUpdatePhoneResponse from 'state/concepts/session/__mocks__/userUpdatePhoneResponse';
import userUpdatePhoneOperation from 'state/concepts/session/operations/userUpdatePhone';
import { userUpdatePhoneEndpoint } from 'state/concepts/session/endpoints';

jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('userUpdatePhone operation', () => {
  let dispatch;

  const action = {
    values: {
      code: 'code',
    },
    form: {},
  };

  const body = {
    code: action.values.code,
  };

  const { endpoint, url } = userUpdatePhoneEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userUpdatePhoneOperation.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userUpdatePhoneOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response: userUpdatePhoneResponse });
    const response = normalize(userUpdatePhoneResponse.data);
    const userProfile = build(response, 'userProfile', userUpdatePhoneResponse.data.data.id);

    beforeEach(beforeFunction(httpClient, action));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(5);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, updateUser({ userProfile }));
      expect(dispatch).toHaveBeenNthCalledWith(3, dataDeleteEntity('meta'));
      expect(dispatch).toHaveBeenNthCalledWith(
        4,
        dataApiSuccess({
          endpoint,
          response,
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(
        5,
        showMessage({
          description: { id: 'notification.personalInformationUpdated' },
        }),
      );
    });
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'put',
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
