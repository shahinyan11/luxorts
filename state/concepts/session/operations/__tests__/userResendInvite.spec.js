import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import userResendInviteOperation from 'state/concepts/session/operations/userResendInvite';
import resendInviteResponse from 'state/concepts/session/__mocks__/resendInviteResponse';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userResendInviteEndpoint } from 'state/concepts/session/endpoints';
import { showMessage } from 'state/flash-messages/actions';

jest.mock('utils/showErrorNotifications');

describe('userResendInvite operation', () => {
  let dispatch;
  const id = 'test_id';

  const action = {
    invitationId: id,
  };

  const { url, endpoint } = userResendInviteEndpoint(id);

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userResendInviteOperation.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userResendInviteOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response: resendInviteResponse });
    const response = normalize(resendInviteResponse.data);

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, { id });
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));

      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
          response,
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        showMessage({
          messageType: MESSAGE_TYPE.SUCCESS,
          description: { id: 'notification.inviteFriends' },
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
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
