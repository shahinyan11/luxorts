import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';
import { fetchUserInvitationEndpoint } from 'state/concepts/session/endpoints';
import { FETCH_USER_INVITATION } from 'state/concepts/session/types';
import { paginationSelector } from 'state/concepts/session/selectors';

const fetchUserInvitation = createLogic({
  type: FETCH_USER_INVITATION,
  latest: true,

  async process({ httpClient, getState }, dispatch, done) {
    const { endpoint, url } = fetchUserInvitationEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const params = {
        page: paginationSelector(getState()),
      };

      const { data } = await httpClient.get(url, { params });
      const response = normalize(data, { endpoint });

      dispatch(dataDeleteEntity('userInvitation'));
      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchUserInvitation;
