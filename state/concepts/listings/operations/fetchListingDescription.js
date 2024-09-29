import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import { isErrorStatusNotFound } from 'utils/httpErrors';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { FETCH_LISTING_DESCRIPTION } from 'state/concepts/listings/types';
import { fetchListingDescriptionEndpoint } from 'state/concepts/listings/endpoints';

const fetchListingDescription = createLogic({
  type: FETCH_LISTING_DESCRIPTION,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { endpoint, url } = fetchListingDescriptionEndpoint(action.listingId);

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

export default fetchListingDescription;
