import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import { FORM_DATA_CONFIG } from 'constants';

import showErrorNotifications from 'utils/showErrorNotifications';

import { USER_UPDATE_AVATAR } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userUpdateAvatarEndpoint } from 'state/concepts/session/endpoints';
import { updateUser } from 'state/concepts/session/actions';
import { hideModal } from 'state/modal/actions';
import { showMessage } from 'state/flash-messages/actions';

const userUpdateAvatarOperation = createLogic({
  type: USER_UPDATE_AVATAR,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { endpoint, url } = userUpdateAvatarEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const formData = new FormData();
      formData.append('avatar', action.file);

      const { data } = await httpClient.put(url, formData, FORM_DATA_CONFIG);
      const response = normalize(data);
      const userProfile = build(response, camelCase(data.data.type), data.data.id);

      dispatch(hideModal());
      dispatch(updateUser({ userProfile }));
      dispatch(dataApiSuccess({ endpoint, response }));
      dispatch(
        showMessage({
          description: { id: 'notification.avatarUploaded' },
        }),
      );
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userUpdateAvatarOperation;
