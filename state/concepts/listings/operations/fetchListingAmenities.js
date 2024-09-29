import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import { isErrorStatusNotFound } from 'utils/httpErrors';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { FETCH_LISTING_AMENITIES } from 'state/concepts/listings/types';
import { fetchListingAmenitiesEndpoint } from 'state/concepts/listings/endpoints';

const fetchListingAmenities = createLogic({
  type: FETCH_LISTING_AMENITIES,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { endpoint, url } = fetchListingAmenitiesEndpoint(action.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.get(url);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      if (!isErrorStatusNotFound(error)) {
        showErrorNotifications({ error, dispatch });
      }

      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchListingAmenities;
