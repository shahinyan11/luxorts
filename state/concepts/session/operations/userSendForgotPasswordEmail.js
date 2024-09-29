import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';
import assignFormErrors from 'utils/form/assignFormErrors';
import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import setAuthorizationHeader from 'utils/setAuthorizationHeader';
import { createRoute } from 'utils/createRouteHelpers';

import { USER_SEND_FORGOT_PASSWORD_EMAIL } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userSendForgotPasswordEmailEndpoint } from 'state/concepts/session/endpoints';

const userSendForgotPasswordEmail = createLogic({
  type: USER_SEND_FORGOT_PASSWORD_EMAIL,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userSendForgotPasswordEmailEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        email: values.email,
      };

      const { data } = await httpClient.post(url, body);

      setCookieIsomorphic(null, 'tokens', JSON.stringify(data.meta));
      setAuthorizationHeader(httpClient, data.meta.access);

      dispatch(dataApiSuccess({ endpoint }));

      if (values.redirectRoute) {
        redirect(
          createRoute({
            pathname: values.redirectRoute,
            query: {
              email: values.email,
            },
          }),
        );
      }
    } catch (error) {
      showErrorNotifications({ error, dispatch });

      if (form) {
        assignFormErrors(form, error);
      }

      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userSendForgotPasswordEmail;
