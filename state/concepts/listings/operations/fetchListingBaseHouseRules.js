import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { FETCH_LISTING_BASE_HOUSE_RULES } from 'state/concepts/listings/types';
import { fetchListingBaseHouseRulesEndpoint } from 'state/concepts/listings/endpoints';

const fetchListingBaseHouseRules = createLogic({
  type: FETCH_LISTING_BASE_HOUSE_RULES,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = fetchListingBaseHouseRulesEndpoint;

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

export default fetchListingBaseHouseRules;
