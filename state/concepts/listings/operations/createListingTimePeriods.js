import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import {
  dataApiRequest,
  dataApiSuccess,
  dataApiFailure,
  dataDeleteEntity,
} from 'state/data/actions';
import { CREATE_LISTING_TIME_PERIODS } from 'state/concepts/listings/types';
import { createListingTimePeriodsEndpoint } from 'state/concepts/listings/endpoints';

const createListingTimePeriods = createLogic({
  type: CREATE_LISTING_TIME_PERIODS,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { endpoint, url } = createListingTimePeriodsEndpoint(action.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        fetch_start_date: action.fetchStartDate,
        fetch_end_date: action.fetchEndDate,
        start_date: action.startDate,
        end_date: action.endDate,
        kind: action.kind,
      };

      const { data } = await httpClient.post(url, body);
      const response = normalize(data);

      dispatch(dataDeleteEntity('listingTimePeriod'));
      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default createListingTimePeriods;
