import { createLogic } from 'redux-logic';

import { FILTER_LISTINGS } from 'state/concepts/listings/types';
import {
  setListingsFilterParams,
  setListingsPage,
  fetchListings,
} from 'state/concepts/listings/actions';

const filterListings = createLogic({
  type: FILTER_LISTINGS,
  latest: true,

  async process({ action: { filters } }, dispatch, done) {
    dispatch(setListingsFilterParams(filters));
    dispatch(setListingsPage(1));
    dispatch(fetchListings({ skipLoading: true }));

    done();
  },
});

export default filterListings;
