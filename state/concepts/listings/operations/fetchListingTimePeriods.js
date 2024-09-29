import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import { isErrorStatusNotFound } from 'utils/httpErrors';
import getTimePeriodBoundaries from 'utils/listing/getTimePeriodBoundaries';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { FETCH_LISTING_TIME_PERIODS } from 'state/concepts/listings/types';
import { fetchListingTimePeriodsEndpoint } from 'state/concepts/listings/endpoints';

const fetchListingTimePeriods = createLogic({
  type: FETCH_LISTING_TIME_PERIODS,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { startDate, endDate } = getTimePeriodBoundaries();
    const { endpoint, url } = fetchListingTimePeriodsEndpoint(action.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.get(url, {
        params: {
          fetch_start_date: action.startDate || startDate,
          fetch_end_date: action.endDate || endDate,
        },
      });
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

export default fetchListingTimePeriods;
