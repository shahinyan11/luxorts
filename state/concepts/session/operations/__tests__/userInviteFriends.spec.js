import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';

import userInviteFriendsOperation from 'state/concepts/session/operations/userInviteFriends';
import inviteFriendsResponse from 'state/concepts/session/__mocks__/inviteFriendsResponse';
import { userInviteFriendsEndpoint } from 'state/concepts/session/endpoints';
import { paginationSelector } from 'state/concepts/session/selectors';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';
import { showMessage } from 'state/flash-messages/actions';

import mockedPagination from 'views/__mocks__/mockedPagination';

jest.mock('utils/showErrorNotifications');
jest.mock('utils/form/assignFormErrors');

describe('userInviteFriends operation', () => {
  let dispatch;

  const getState = () => ({
    session: {
      pagination: mockedPagination,
    },
  });

  const action = {
    values: {
      userInvitations: ['test@gmail.com'],
    },
    form: {},
  };

  const body = {
    user_invitations: action.values.userInvitations.map((email) => ({ email })),
  };

  const params = {
    page: paginationSelector(getState()),
  };

  const { url, endpoint } = userInviteFriendsEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userInviteFriendsOperation.process({ httpClient, action, getState }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userInviteFriendsOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response: inviteFriendsResponse });
    const response = normalize(inviteFriendsResponse.data);

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url, body, { params });
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(5);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataDeleteEntity('userInvitation'));
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
          messageType: MESSAGE_TYPE.SUCCESS,
          description: { id: 'notification.inviteFriends' },
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(
        5,
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: { id: 'notification.someFriendsAreNotInvited' },
        }),
      );
    });
  });

  describe('success without errors in meta', () => {
    const httpClient = mockHttpClient({ method: 'post', response: { data: { meta: null } } });

    beforeEach(beforeFunction(httpClient));

    it('shouldn`t call showMessage to showing error message', () => {
      expect(dispatch).not.toHaveBeenCalledWith(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: { id: 'notification.someFriendsAreNotInvited' },
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
