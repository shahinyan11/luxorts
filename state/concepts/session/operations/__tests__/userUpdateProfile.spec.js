import normalize from 'json-api-normalizer';
import build from 'redux-object';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import userUpdateProfileResponse from 'state/concepts/session/__mocks__/userUpdateProfileResponse';
import { userUpdateProfileEndpoint } from 'state/concepts/session/endpoints';
import userUpdateProfileOperation from 'state/concepts/session/operations/userUpdateProfile';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateUser } from 'state/concepts/session/actions';
import { showMessage } from 'state/flash-messages/actions';

jest.mock('utils/showErrorNotifications');

describe('userUpdateProfile operation', () => {
  let dispatch;

  const { url, endpoint } = userUpdateProfileEndpoint;

  const action = {
    values: {
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
      phoneNumber: 'phoneNumber',
      dateOfBirth: 'dateOfBirth',
    },
  };

  const body = {
    email: action.values.email,
    first_name: action.values.firstName,
    last_name: action.values.lastName,
    phone_number: action.values.phoneNumber,
    date_of_birth: action.values.dateOfBirth,
  };

  const beforeFunction = (httpClient) => () => {
    dispatch = jest.fn();

    userUpdateProfileOperation.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('has valid attributes', () => {
    expect(userUpdateProfileOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response: userUpdateProfileResponse });
    const response = normalize(userUpdateProfileResponse.data);
    const userProfile = build(response, 'userProfile', userUpdateProfileResponse.data.data.id);
    const updateData = { userProfile };

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(4);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, updateUser(updateData));
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        dataApiSuccess({
          endpoint,
          response,
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(
        4,
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
