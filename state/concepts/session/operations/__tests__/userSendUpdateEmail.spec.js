import showErrorNotifications from 'utils/showErrorNotifications';
import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { showModal } from 'state/modal/actions';
import userSendUpdateEmailOperation from 'state/concepts/session/operations/userSendUpdateEmail';
import { userSendUpdateEmailEndpoint } from 'state/concepts/session/endpoints';

jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('userSendUpdateEmail operation', () => {
  let dispatch;

  const action = {
    values: {
      email: 'email',
      password: 'password',
    },
    form: {},
  };

  const body = {
    email: action.values.email,
    password: action.values.password,
  };

  const { endpoint, url } = userSendUpdateEmailEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userSendUpdateEmailOperation.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userSendUpdateEmailOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post' });

    beforeEach(beforeFunction(httpClient, action));

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
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        showModal({
          modalType: 'UPDATE_EMAIL_MODAL',
          modalProps: {
            email: action.values.email,
          },
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
