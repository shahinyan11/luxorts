import { createLogic } from 'redux-logic';

import ROUTES from 'constants/routes';

import { isErrorStatusUnauthorized } from 'utils/httpErrors';
import redirect from 'utils/redirect';
import assignFormErrors from 'utils/form/assignFormErrors';
import showErrorNotifications from 'utils/showErrorNotifications';
import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import setAuthorizationHeader from 'utils/setAuthorizationHeader';

import { USER_VALIDATE_FORGOT_PASSWORD_CODE } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userValidateForgotPasswordCodeEndpoint } from 'state/concepts/session/endpoints';
import { hideModal } from 'state/modal/actions';

const userValidateForgotPasswordCode = createLogic({
  type: USER_VALIDATE_FORGOT_PASSWORD_CODE,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userValidateForgotPasswordCodeEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        code: values.code,
      };

      const { data } = await httpClient.post(url, body);

      setCookieIsomorphic(null, 'tokens', JSON.stringify(data.meta));
      setAuthorizationHeader(httpClient, data.meta.access);

      dispatch(dataApiSuccess({ endpoint }));

      if (values.redirectRoute) {
        redirect(values.redirectRoute);
      }

      if (values.isModal) {
        dispatch(hideModal());
      }
    } catch (error) {
      if (isErrorStatusUnauthorized(error)) {
        redirect(ROUTES.SIGN_IN.PATH);
      }

      assignFormErrors(form, error);
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userValidateForgotPasswordCode;
