import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { userRemoveAvatarEndpoint } from 'state/concepts/session/endpoints';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateUser } from 'state/concepts/session/actions';
import { hideModal } from 'state/modal/actions';

import { showMessage } from 'state/flash-messages/actions';

import userRemoveAvatarOperation from '../userRemoveAvatar';

jest.mock('utils/showErrorNotifications');

describe('userRemoveAvatar operation', () => {
  let dispatch;
  const { url, endpoint } = userRemoveAvatarEndpoint;

  const beforeFunction = (httpClient) => () => {
    dispatch = jest.fn();
    userRemoveAvatarOperation.process({ httpClient }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userRemoveAvatarOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'delete' });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.delete).toHaveBeenCalledWith(url);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(5);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        updateUser({ userProfile: { avatarUrls: null } }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(3, dataApiSuccess({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(4, hideModal());
      expect(dispatch).toHaveBeenNthCalledWith(
        5,
        showMessage({
          description: { id: 'notification.avatarRemoved' },
        }),
      );
    });
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'delete',
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
