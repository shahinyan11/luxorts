import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { USER_RESEND_UPDATE_EMAIL } from 'state/concepts/session/types';
import { userResendUpdateEmailEndpoint } from 'state/concepts/session/endpoints';

const userResendUpdateEmail = createLogic({
  type: USER_RESEND_UPDATE_EMAIL,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = userResendUpdateEmailEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      await httpClient.post(url);

      dispatch(dataApiSuccess({ endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userResendUpdateEmail;
