import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import redirect from 'utils/redirect';
import assignFormErrors from 'utils/form/assignFormErrors';
import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import setAuthorizationHeader from 'utils/setAuthorizationHeader';

import { USER_SIGN_UP } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userSignInSuccess } from 'state/concepts/session/actions';
import { createUserEndpoint } from 'state/concepts/session/endpoints';

const userSignUp = createLogic({
  type: USER_SIGN_UP,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = createUserEndpoint;

    dispatch(dataApiRequest({ endpoint }));
    try {
      const body = {
        email: values.email,
        password: values.password,
        invitation_id: values.invitationID,
        user_profile: {
          first_name: values.userProfile.firstName,
          last_name: values.userProfile.lastName,
          phone_number: values.userProfile.phoneNumber,
          date_of_birth: values.userProfile.dateOfBirth,
        },
      };

      const { data } = await httpClient.post(url, body);
      const response = normalize(data);
      const currentUser = build(response, camelCase(data.data.type), data.data.id);

      setCookieIsomorphic(null, 'currentUser', JSON.stringify(currentUser));
      setCookieIsomorphic(null, 'tokens', JSON.stringify(data.meta));
      setAuthorizationHeader(httpClient, data.meta.access);

      dispatch(userSignInSuccess(currentUser));
      dispatch(dataApiSuccess({ response, endpoint }));

      if (values.redirectRoute) {
        redirect(values.redirectRoute);
      }
    } catch (error) {
      assignFormErrors(form, error);
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userSignUp;
