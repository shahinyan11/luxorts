import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import redirect from 'utils/redirect';
import isPresent from 'utils/isPresent';

import { USER_UPDATE_PASSWORD } from 'state/concepts/session/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userUpdatePasswordEndpoint } from 'state/concepts/session/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const userUpdatePassword = createLogic({
  type: USER_UPDATE_PASSWORD,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userUpdatePasswordEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        password: values.password,
      };

      await httpClient.put(url, body);

      dispatch(dataApiSuccess({ endpoint }));

      if (values.redirectRoute) {
        redirect(values.redirectRoute);
      }

      if (isPresent(values.message)) {
        dispatch(showMessage(values.message));
      }
    } catch (error) {
      assignFormErrors(form, error);
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userUpdatePassword;
