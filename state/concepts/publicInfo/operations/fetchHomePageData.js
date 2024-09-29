import { createLogic } from 'redux-logic';

import { FETCH_HOME_PAGE_DATA } from 'state/concepts/publicInfo/types';
import {
  fetchPopularApartments,
  fetchPropertyTypes,
  fetchTrendingLocations,
} from 'state/concepts/publicInfo/actions';

const fetchHomePageDataOperation = createLogic({
  type: FETCH_HOME_PAGE_DATA,
  latest: true,

  async process(_, dispatch, done) {
    dispatch(fetchTrendingLocations());
    dispatch(fetchPropertyTypes());
    dispatch(fetchPopularApartments());

    done();
  },
});

export default fetchHomePageDataOperation;
