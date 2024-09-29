import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import { isErrorStatusNotFound } from 'utils/httpErrors';

import {
  dataApiRequest,
  dataApiSuccess,
  dataApiFailure,
  dataDeleteEntity,
} from 'state/data/actions';
import { FETCH_LISTINGS } from 'state/concepts/listings/types';
import { fetchListingsEndpoint } from 'state/concepts/listings/endpoints';
import {
  appliedFiltersSelector,
  paginationSelector,
  searchQuerySelector,
  sortParamsSelector,
} from 'state/concepts/listings/selectors';
import { setListingsPage } from 'state/concepts/listings/actions';

const fetchListings = createLogic({
  type: FETCH_LISTINGS,
  latest: true,

  async process({ action, httpClient, getState }, dispatch, done) {
    const { endpoint, url } = fetchListingsEndpoint;
    const state = getState();

    const params = {
      page: paginationSelector(state),
      filter: appliedFiltersSelector(state),
      search: searchQuerySelector(state),
      sort: sortParamsSelector(state),
    };

    if (!action.skipLoading) {
      dispatch(dataApiRequest({ endpoint }));
    }

    try {
      const { data } = await httpClient.get(url, { params });
      const response = normalize(data, { endpoint });

      if (!action.skipClearing) {
        dispatch(dataDeleteEntity('listing'));
      }

      dispatch(dataApiSuccess({ response, endpoint }));
      dispatch(setListingsPage(data.links.self));
    } catch (error) {
      if (!isErrorStatusNotFound(error)) {
        showErrorNotifications({ error, dispatch });
      }

      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchListings;
