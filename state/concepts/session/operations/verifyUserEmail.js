import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import redirect from 'utils/redirect';
import assignFormErrors from 'utils/form/assignFormErrors';
import showErrorNotifications from 'utils/showErrorNotifications';

import { VERIFY_USER_EMAIL } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { verifyUserEmailEndpoint } from 'state/concepts/session/endpoints';
import { updateUser } from 'state/concepts/session/actions';

const verifyUserEmail = createLogic({
  type: VERIFY_USER_EMAIL,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = verifyUserEmailEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        code: values.code,
      };

      const { data } = await httpClient.post(url, body);
      const response = normalize(data);
      const userData = build(response, camelCase(data.data.type), data.data.id);

      dispatch(updateUser(userData));
      dispatch(dataApiSuccess({ response, endpoint }));

      if (values.redirectRoute) {
        redirect(values.redirectRoute);
      }
    } catch (error) {
      assignFormErrors(form, error);
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default verifyUserEmail;
