import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';

import { USER_CHANGE_PASSWORD } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userChangePasswordEndpoint } from 'state/concepts/session/endpoints';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { showMessage } from 'state/flash-messages/actions';
import { fetchSelf } from 'state/concepts/users/actions';

const userChangePassword = createLogic({
  type: USER_CHANGE_PASSWORD,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userChangePasswordEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        current_password: values.currentPassword,
        new_password: values.newPassword,
      };

      await httpClient.put(url, body);

      dispatch(dataApiSuccess({ endpoint }));
      dispatch(fetchSelf());
      dispatch(
        showMessage({
          messageType: MESSAGE_TYPE.SUCCESS,
          description: { id: 'notification.updatePassword' },
        }),
      );
    } catch (error) {
      assignFormErrors(form, error);
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userChangePassword;
