import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';

import { UPDATE_LISTING_AVAILABILITY } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateListingAvailabilityEndpoint } from 'state/concepts/listings/endpoints';

const updateListingAvailability = createLogic({
  type: UPDATE_LISTING_AVAILABILITY,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingAvailabilityEndpoint(action.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.put(url);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));

      if (action.redirectRoute) {
        redirect(action.redirectRoute);
      }
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default updateListingAvailability;
