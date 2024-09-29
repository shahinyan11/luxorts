import ROUTES from 'constants/routes';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import removeCookieIsomorphic from 'utils/removeCookieIsomorphic';
import redirect from 'utils/redirect';

import { userAccountDeactivationEndpoint } from 'state/concepts/session/endpoints';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userSignOutSuccess } from 'state/concepts/session/actions';
import { showMessage } from 'state/flash-messages/actions';
import { hideModal } from 'state/modal/actions';

import userDeactivateAccount from '../userDeactivateAccount';

jest.mock('utils/redirect');
jest.mock('utils/removeCookieIsomorphic');
jest.mock('utils/showErrorNotifications');
jest.mock('utils/form/assignFormErrors');

describe('userDeactivateAccount operation', () => {
  let dispatch;

  const action = {
    values: {
      currentPassword: 'current_password',
    },
    form: {},
  };

  const body = {
    current_password: action.values.currentPassword,
  };

  const { endpoint, url } = userAccountDeactivationEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userDeactivateAccount.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userDeactivateAccount).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post' });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url, body);
    });

    it('removes cookies', () => {
      expect(removeCookieIsomorphic).toHaveBeenCalledTimes(2);
      expect(removeCookieIsomorphic).toHaveBeenNthCalledWith(1, null, 'tokens');
      expect(removeCookieIsomorphic).toHaveBeenNthCalledWith(2, null, 'currentUser');
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(5);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataApiSuccess({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(3, userSignOutSuccess());
      expect(dispatch).toHaveBeenNthCalledWith(4, hideModal());
      expect(dispatch).toHaveBeenNthCalledWith(
        5,
        showMessage({
          messageType: MESSAGE_TYPE.SUCCESS,
          description: { id: 'notification.deactivateAccount' },
        }),
      );
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(ROUTES.INDEX.PATH);
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
