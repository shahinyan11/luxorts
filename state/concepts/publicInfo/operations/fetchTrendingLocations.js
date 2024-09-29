import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { fetchTrendingLocationsEndpoint } from 'state/concepts/publicInfo/endpoints';
import { FETCH_TRENDING_LOCATIONS } from 'state/concepts/publicInfo/types';

const fetchTrendingLocations = createLogic({
  type: FETCH_TRENDING_LOCATIONS,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = fetchTrendingLocationsEndpoint;

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

export default fetchTrendingLocations;
