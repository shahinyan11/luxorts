import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import { userResendInviteEndpoint } from 'state/concepts/session/endpoints';
import { USER_RESEND_INVITE } from 'state/concepts/session/types';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { showMessage } from 'state/flash-messages/actions';

const userResendInvite = createLogic({
  type: USER_RESEND_INVITE,
  latest: true,

  async process({ action: { invitationId }, httpClient }, dispatch, done) {
    const { endpoint, url } = userResendInviteEndpoint(invitationId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        id: invitationId,
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);

      dispatch(dataApiSuccess({ endpoint, response }));
      dispatch(
        showMessage({
          messageType: MESSAGE_TYPE.SUCCESS,
          description: { id: 'notification.inviteFriends' },
        }),
      );
    } catch (error) {
      showErrorNotifications({ error, dispatch });

      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userResendInvite;
