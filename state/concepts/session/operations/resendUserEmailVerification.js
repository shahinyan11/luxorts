import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import { RESEND_USER_EMAIL_VERIFICATION } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { resendUserEmailVerificationEndpoint } from 'state/concepts/session/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const resendUserEmailVerification = createLogic({
  type: RESEND_USER_EMAIL_VERIFICATION,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = resendUserEmailVerificationEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.put(url);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));
      dispatch(
        showMessage({
          description: { id: 'shared.emailHasBeenResent' },
        }),
      );
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default resendUserEmailVerification;
