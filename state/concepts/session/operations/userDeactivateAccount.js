import { createLogic } from 'redux-logic';

import ROUTES from 'constants/routes';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import removeCookieIsomorphic from 'utils/removeCookieIsomorphic';
import redirect from 'utils/redirect';

import { userAccountDeactivationEndpoint } from 'state/concepts/session/endpoints';
import { USER_DEACTIVATE_ACCOUNT } from 'state/concepts/session/types';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { hideModal } from 'state/modal/actions';
import { showMessage } from 'state/flash-messages/actions';
import { userSignOutSuccess } from 'state/concepts/session/actions';

const userDeactivateAccount = createLogic({
  type: USER_DEACTIVATE_ACCOUNT,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userAccountDeactivationEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        current_password: values.currentPassword,
      };

      await httpClient.post(url, body);

      dispatch(dataApiSuccess({ endpoint }));

      removeCookieIsomorphic(null, 'tokens');
      removeCookieIsomorphic(null, 'currentUser');

      dispatch(userSignOutSuccess());
      dispatch(hideModal());
      dispatch(
        showMessage({
          messageType: MESSAGE_TYPE.SUCCESS,
          description: { id: 'notification.deactivateAccount' },
        }),
      );

      redirect(ROUTES.INDEX.PATH);
    } catch (error) {
      assignFormErrors(form, error);
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userDeactivateAccount;
