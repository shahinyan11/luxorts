import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { FETCH_LISTING_BASE_CAPABILITIES } from 'state/concepts/listings/types';
import { fetchListingBaseCapabilitiesEndpoint } from 'state/concepts/listings/endpoints';

const fetchListingBaseCapabilities = createLogic({
  type: FETCH_LISTING_BASE_CAPABILITIES,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = fetchListingBaseCapabilitiesEndpoint;

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

export default fetchListingBaseCapabilities;
