import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';
import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userChangePasswordEndpoint } from 'state/concepts/session/endpoints';
import { showMessage } from 'state/flash-messages/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { fetchSelf } from 'state/concepts/users/actions';

import userChangePassword from '../userChangePassword';

jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('userChangePassword operation', () => {
  let dispatch;

  const action = {
    values: {
      currentPassword: 'current_password',
      newPassword: 'new_password',
    },
    form: {},
  };

  const body = {
    current_password: action.values.currentPassword,
    new_password: action.values.newPassword,
  };

  const { endpoint, url } = userChangePasswordEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userChangePassword.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userChangePassword).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put' });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(4);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(3, fetchSelf());
      expect(dispatch).toHaveBeenNthCalledWith(
        4,
        showMessage({
          messageType: MESSAGE_TYPE.SUCCESS,
          description: { id: 'notification.updatePassword' },
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
