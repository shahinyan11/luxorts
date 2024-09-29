import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';

import { CONTACT_US_REQUEST } from 'state/concepts/publicInfo/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { contactUsRequestEndpoint } from 'state/concepts/publicInfo/endpoints';

const userChangePassword = createLogic({
  type: CONTACT_US_REQUEST,
  latest: true,

  async process({ action: { values }, httpClient }, dispatch, done) {
    const { endpoint, url } = contactUsRequestEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: values.phoneNumber,
        message: values.message,
      };

      await httpClient.post(url, body);

      dispatch(dataApiSuccess({ endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userChangePassword;
