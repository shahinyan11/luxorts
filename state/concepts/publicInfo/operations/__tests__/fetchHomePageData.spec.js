import { dispatch } from '__mocks__/react-redux';

import {
  fetchPopularApartments,
  fetchPropertyTypes,
  fetchTrendingLocations,
} from 'state/concepts/publicInfo/actions';
import fetchHomePageDataOperation from 'state/concepts/publicInfo/operations/fetchHomePageData';

describe('fetchHomePageData operation', () => {
  it('matches snapshot', () => {
    expect(fetchHomePageDataOperation).toMatchSnapshot();
  });

  it('dispatches actions', () => {
    fetchHomePageDataOperation.process(null, dispatch, jest.fn());

    expect(dispatch).toHaveBeenCalledWith(fetchTrendingLocations());
    expect(dispatch).toHaveBeenCalledWith(fetchPropertyTypes());
    expect(dispatch).toHaveBeenCalledWith(fetchPopularApartments());
  });
});
