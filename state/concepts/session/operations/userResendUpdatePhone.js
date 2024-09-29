import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { USER_RESEND_UPDATE_PHONE } from 'state/concepts/session/types';
import { userResendUpdatePhoneEndpoint } from 'state/concepts/session/endpoints';

const userResendUpdatePhone = createLogic({
  type: USER_RESEND_UPDATE_PHONE,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = userResendUpdatePhoneEndpoint;

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

export default userResendUpdatePhone;
