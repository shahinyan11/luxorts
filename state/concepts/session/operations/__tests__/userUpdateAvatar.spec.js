import normalize from 'json-api-normalizer';
import build from 'redux-object';

import { FORM_DATA_CONFIG } from 'constants';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { userUpdateAvatarEndpoint } from 'state/concepts/session/endpoints';
import userUpdateAvatarResponse from 'state/concepts/session/__mocks__/userUpdateAvatarResponse';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateUser } from 'state/concepts/session/actions';
import { hideModal } from 'state/modal/actions';

import { showMessage } from 'state/flash-messages/actions';

import userUpdateAvatarOperation from '../userUpdateAvatar';

jest.mock('utils/showErrorNotifications');

describe('userUpdateAvatar operation', () => {
  let dispatch;
  const { url, endpoint } = userUpdateAvatarEndpoint;

  const action = {
    file: 'file',
  };

  const formData = new FormData();
  formData.append('avatar', action.file);

  const beforeFunction = (httpClient) => () => {
    dispatch = jest.fn();
    userUpdateAvatarOperation.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('has valid attributes', () => {
    expect(userUpdateAvatarOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response: userUpdateAvatarResponse });
    const response = normalize(userUpdateAvatarResponse.data);
    const userProfile = build(response, 'userProfile', userUpdateAvatarResponse.data.data.id);

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, formData, FORM_DATA_CONFIG);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(5);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, hideModal());
      expect(dispatch).toHaveBeenNthCalledWith(3, updateUser({ userProfile }));
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
          description: { id: 'notification.avatarUploaded' },
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
