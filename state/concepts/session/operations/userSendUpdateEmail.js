import { createLogic } from 'redux-logic';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { showModal } from 'state/modal/actions';
import { userSendUpdateEmailEndpoint } from 'state/concepts/session/endpoints';
import { USER_SEND_UPDATE_EMAIL } from 'state/concepts/session/types';

const userSendUpdateEmail = createLogic({
  type: USER_SEND_UPDATE_EMAIL,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = userSendUpdateEmailEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        password: values.password,
        email: values.email,
      };

      await httpClient.post(url, body);

      dispatch(dataApiSuccess({ endpoint }));

      dispatch(
        showModal({
          modalType: 'UPDATE_EMAIL_MODAL',
          modalProps: {
            email: values.email,
          },
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

export default userSendUpdateEmail;
