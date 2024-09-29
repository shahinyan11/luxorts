import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';
import { fetchPropertyTypesEndpoint } from 'state/concepts/publicInfo/endpoints';
import { FETCH_PROPERTY_TYPES } from 'state/concepts/publicInfo/types';

const fetchPropertyTypes = createLogic({
  type: FETCH_PROPERTY_TYPES,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = fetchPropertyTypesEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.get(url);
      const response = normalize(data);

      dispatch(dataDeleteEntity('propertyType'));
      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchPropertyTypes;
