import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';

import { userInviteFriendsEndpoint } from 'state/concepts/session/endpoints';
import { USER_INVITE_FRIENDS } from 'state/concepts/session/types';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { paginationSelector } from 'state/concepts/session/selectors';
import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';
import { showMessage } from 'state/flash-messages/actions';

const userInviteFriends = createLogic({
  type: USER_INVITE_FRIENDS,
  latest: true,

  async process({ action: { values, form }, httpClient, getState }, dispatch, done) {
    const { endpoint, url } = userInviteFriendsEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        user_invitations: values.userInvitations.map((email) => ({ email })),
      };
      const params = {
        page: paginationSelector(getState()),
      };

      const { data } = await httpClient.post(url, body, { params });
      const response = normalize(data);

      dispatch(dataDeleteEntity('userInvitation'));
      dispatch(dataApiSuccess({ endpoint, response }));
      dispatch(
        showMessage({
          description: { id: 'notification.inviteFriends' },
        }),
      );

      if (data.meta.errors) {
        dispatch(
          showMessage({
            messageType: MESSAGE_TYPE.ERROR,
            description: { id: 'notification.someFriendsAreNotInvited' },
          }),
        );
      }
    } catch (error) {
      assignFormErrors(form, error);
      showErrorNotifications({ error, dispatch });

      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userInviteFriends;
