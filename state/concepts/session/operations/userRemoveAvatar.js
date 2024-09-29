import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';

import { USER_REMOVE_AVATAR } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userRemoveAvatarEndpoint } from 'state/concepts/session/endpoints';
import { updateUser } from 'state/concepts/session/actions';
import { hideModal } from 'state/modal/actions';
import { showMessage } from 'state/flash-messages/actions';

const userRemoveAvatarOperation = createLogic({
  type: USER_REMOVE_AVATAR,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = userRemoveAvatarEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      await httpClient.delete(url);

      dispatch(
        updateUser({
          userProfile: { avatarUrls: null },
        }),
      );

      dispatch(dataApiSuccess({ endpoint }));
      dispatch(hideModal());
      dispatch(
        showMessage({
          description: { id: 'notification.avatarRemoved' },
        }),
      );
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userRemoveAvatarOperation;
