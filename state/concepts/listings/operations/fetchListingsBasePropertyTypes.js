import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { FETCH_LISTINGS_BASE_PROPERTY_TYPES } from 'state/concepts/listings/types';
import { fetchListingsBasePropertyTypesEndpoint } from 'state/concepts/listings/endpoints';

const fetchListingsBasePropertyTypes = createLogic({
  type: FETCH_LISTINGS_BASE_PROPERTY_TYPES,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = fetchListingsBasePropertyTypesEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.get(url);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchListingsBasePropertyTypes;
