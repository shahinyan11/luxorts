import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userSendUpdatePhoneEndpoint } from 'state/concepts/session/endpoints';
import { USER_SEND_UPDATE_PHONE } from 'state/concepts/session/types';

const userSendUpdatePhone = createLogic({
  type: USER_SEND_UPDATE_PHONE,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userSendUpdatePhoneEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        phone_number: values.phoneNumber,
      };

      const { data } = await httpClient.post(url, body);
      const response = normalize(data, { endpoint });

      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      assignFormErrors(form, error);
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userSendUpdatePhone;
