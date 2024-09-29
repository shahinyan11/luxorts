import {
  setListingsFilterParams,
  setListingsPage,
  fetchListings,
} from 'state/concepts/listings/actions';

import filterListings from '../filterListings';

describe('filterListings operation', () => {
  let dispatch;

  const action = {
    filters: 'filters',
  };

  beforeEach(() => {
    dispatch = jest.fn();
    filterListings.process({ action }, dispatch, jest.fn());
  });

  it('matches snapshot', () => {
    expect(filterListings).toMatchSnapshot();
  });

  it('dispatches actions', () => {
    expect(dispatch).toHaveBeenCalledTimes(3);

    expect(dispatch).toHaveBeenNthCalledWith(1, setListingsFilterParams(action.filters));
    expect(dispatch).toHaveBeenNthCalledWith(2, setListingsPage(1));
    expect(dispatch).toHaveBeenNthCalledWith(3, fetchListings({ skipLoading: true }));
  });
});
