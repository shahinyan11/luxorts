import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import { USER_LOGIN_REDIRECT_BY_STATUS, USER_VERIFIED_STATUS } from 'constants';

import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';

import { USER_ACTIVATE_ACCOUNT } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateUser } from 'state/concepts/session/actions';
import { userAccountActivationEndpoint } from 'state/concepts/session/endpoints';
import { hideModal } from 'state/modal/actions';

const userActivateAccount = createLogic({
  type: USER_ACTIVATE_ACCOUNT,
  latest: true,

  async process({ action: { redirectRoute, isModal }, httpClient }, dispatch, done) {
    const { endpoint, url } = userAccountActivationEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.post(url);
      const response = normalize(data);
      const userData = build(response, camelCase(data.data.type), data.data.id);

      dispatch(updateUser(userData));
      dispatch(dataApiSuccess({ response, endpoint }));

      const isAccountVerified = userData.verifiedStatus === USER_VERIFIED_STATUS.PHONE_VERIFIED;

      const route = isAccountVerified
        ? redirectRoute
        : USER_LOGIN_REDIRECT_BY_STATUS[userData.verifiedStatus];

      if (route) {
        redirect(route);
      }

      if (isModal) {
        dispatch(hideModal());
      }
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userActivateAccount;
