import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';

import { USER_RESEND_FORGOT_PASSWORD_EMAIL } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userResendForgotPasswordEmailEndpoint } from 'state/concepts/session/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const userResendForgotPasswordEmail = createLogic({
  type: USER_RESEND_FORGOT_PASSWORD_EMAIL,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = userResendForgotPasswordEmailEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      await httpClient.post(url);

      dispatch(dataApiSuccess({ endpoint }));
      dispatch(
        showMessage({
          description: { id: 'shared.recoveryLinkHasBeenResent' },
        }),
      );
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userResendForgotPasswordEmail;
