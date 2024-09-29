import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { userResendForgotPasswordEmailEndpoint } from 'state/concepts/session/endpoints';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { showMessage } from 'state/flash-messages/actions';

import userResendForgotPasswordEmail from '../userResendForgotPasswordEmail';

jest.mock('utils/showErrorNotifications');

describe('userResendForgotPasswordEmail operation', () => {
  let dispatch;

  const beforeFunction = (httpClient) => () => {
    dispatch = jest.fn();
    userResendForgotPasswordEmail.process({ httpClient }, dispatch, jest.fn());
  };

  const { url, endpoint } = userResendForgotPasswordEmailEndpoint;

  it('matches snapshot', () => {
    expect(userResendForgotPasswordEmail).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post' });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url);
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
        showMessage({
          description: { id: 'shared.recoveryLinkHasBeenResent' },
        }),
      );
    });
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
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
