import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateUser } from 'state/concepts/session/actions';
import { hideModal } from 'state/modal/actions';
import { userUpdateEmailEndpoint } from 'state/concepts/session/endpoints';
import { USER_UPDATE_EMAIL } from 'state/concepts/session/types';
import { showMessage } from 'state/flash-messages/actions';

const userUpdateEmail = createLogic({
  type: USER_UPDATE_EMAIL,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userUpdateEmailEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        code: values.code,
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);
      const updateData = build(response, camelCase(data.data.type), data.data.id);

      dispatch(updateUser(updateData));
      dispatch(dataApiSuccess({ endpoint, response }));
      dispatch(hideModal());
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

export default userUpdateEmail;
