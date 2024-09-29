import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { FETCH_SELF } from 'state/concepts/users/types';
import { fetchSelfEndpoint } from 'state/concepts/users/endpoints';
import { userSignInSuccess } from 'state/concepts/session/actions';

const fetchSelfOperation = createLogic({
  type: FETCH_SELF,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = fetchSelfEndpoint;

    dispatch(dataApiRequest({ endpoint }));
    try {
      const { data } = await httpClient.get(url);
      const response = normalize(data, { endpoint });
      const currentUser = build(response, camelCase(data.data.type), data.data.id);

      dispatch(dataApiSuccess({ response, endpoint }));
      dispatch(userSignInSuccess(currentUser));
    } catch {
      dispatch(dataApiFailure({ endpoint }));
    }
    done();
  },
});

export default fetchSelfOperation;
