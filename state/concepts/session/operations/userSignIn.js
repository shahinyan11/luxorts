import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import { ACCOUNT_STATUS } from 'constants/statuses';
import { USER_LOGIN_REDIRECT_BY_STATUS, USER_VERIFIED_STATUS } from 'constants';

import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';
import assignFormErrors from 'utils/form/assignFormErrors';
import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import setAuthorizationHeader from 'utils/setAuthorizationHeader';

import { USER_SIGN_IN } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userSignInSuccess } from 'state/concepts/session/actions';
import { signInUserEndpoint } from 'state/concepts/session/endpoints';
import { showModal } from 'state/modal/actions';
import { isErrorStatusUnauthorized } from 'utils/httpErrors';

const userSignIn = createLogic({
  type: USER_SIGN_IN,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = signInUserEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        email: values.email,
        password: values.password,
      };

      const { data } = await httpClient.post(url, body);
      const response = normalize(data);
      const userType = data.data.type;
      const user = build(response, camelCase(userType), data.data.id);
      const currentUser = { ...user, userType };

      setCookieIsomorphic(null, 'currentUser', JSON.stringify(currentUser));
      setCookieIsomorphic(null, 'tokens', JSON.stringify(data.meta));
      setAuthorizationHeader(httpClient, data.meta.access);

      dispatch(userSignInSuccess(currentUser));
      dispatch(dataApiSuccess({ response, endpoint }));

      const isAccountVerified = currentUser.verifiedStatus === USER_VERIFIED_STATUS.PHONE_VERIFIED;
      const isAccountDeactivatedByUser = currentUser.status === ACCOUNT_STATUS.DEACTIVATED_BY_USER;

      if (isAccountDeactivatedByUser) {
        dispatch(
          showModal({
            modalType: 'DEACTIVATED_BY_USER_MODAL',
          }),
        );
      }

      const redirectRoute = isAccountVerified
        ? values.redirectRoute
        : USER_LOGIN_REDIRECT_BY_STATUS[currentUser.verifiedStatus];

      if (redirectRoute && !isAccountDeactivatedByUser) {
        redirect(redirectRoute);
      }
    } catch (error) {
      if (isErrorStatusUnauthorized(error)) {
        dispatch(
          showModal({
            modalType: 'DEACTIVATED_BY_ADMIN_MODAL',
          }),
        );
      } else {
        showErrorNotifications({ error, dispatch });
      }

      assignFormErrors(form, error);
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userSignIn;
