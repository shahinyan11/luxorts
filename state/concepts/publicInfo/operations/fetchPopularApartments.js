import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import { fetchPopularApartmentsEndpoint } from 'state/concepts/publicInfo/endpoints';
import { FETCH_POPULAR_APARTMENTS } from 'state/concepts/publicInfo/types';
import { paginationSelector } from 'state/concepts/publicInfo/selectors';
import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';

const fetchPopularApartments = createLogic({
  type: FETCH_POPULAR_APARTMENTS,
  latest: true,

  async process({ httpClient, getState }, dispatch, done) {
    const { endpoint, url } = fetchPopularApartmentsEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const params = {
        page: paginationSelector(getState()),
      };

      const { data } = await httpClient.get(url, { params });
      const response = normalize(data, { endpoint });

      dispatch(dataDeleteEntity('listing'));
      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchPopularApartments;
