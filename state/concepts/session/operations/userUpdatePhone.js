import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';

import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';
import { updateUser } from 'state/concepts/session/actions';
import { showMessage } from 'state/flash-messages/actions';
import { userUpdatePhoneEndpoint } from 'state/concepts/session/endpoints';
import { USER_UPDATE_PHONE } from 'state/concepts/session/types';

const userUpdatePhone = createLogic({
  type: USER_UPDATE_PHONE,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userUpdatePhoneEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        code: values.code,
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);
      const userProfile = build(response, camelCase(data.data.type), data.data.id);

      dispatch(updateUser({ userProfile }));
      dispatch(dataDeleteEntity('meta'));
      dispatch(dataApiSuccess({ endpoint, response }));
      dispatch(
        showMessage({
          description: { id: 'notification.personalInformationUpdated' },
        }),
      );
    } catch (error) {
      assignFormErrors(form, error);
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userUpdatePhone;
