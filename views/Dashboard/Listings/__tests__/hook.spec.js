import { renderHook } from '@testing-library/react-hooks';

import { LISTING_FILTERS } from 'constants/listing/manageListings';

import checkUserVerification from 'utils/auth/checkUserVerification';

import {
  fetchListingBaseAmenities,
  fetchListings,
  filterListings,
  setListingsPage,
  setListingsSearchQuery,
  setListingsSortOrder,
  setListingTableSettings,
} from 'state/concepts/listings/actions';
import { dataDeleteEntity } from 'state/data/actions';
import { dispatch, store } from '__mocks__/react-redux';

import mockedListings from 'views/__mocks__/mockedListings';
import mockedPagination from 'views/__mocks__/mockedPagination';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingsSelector: jest.fn(() => mockedListings),
  paginationSelector: jest.fn(() => mockedPagination),
  sortSelector: jest.fn(() => ({ sortKey: 'sortKey', direction: 'ascend' })),
  filtersSelector: jest.fn(() => ({ foo: 'bar' })),
  searchQuerySelector: jest.fn(() => 'searchQuery'),
  appliedFiltersSelector: jest.fn(() => ({ foo: 'bar' })),
  baseAmenitiesSelector: jest.fn(() => []),
  listingsTotalSelector: jest.fn(() => 1),
  listingTableSettingsSelector: jest.fn(() => []),
}));

jest.useFakeTimers();

describe('Listings useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onSortClickHandler method should dispatches setListingsSortOrder and fetchListings actions', () => {
    result.current.onSortClickHandler('sortKey')();

    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(dispatch).toHaveBeenNthCalledWith(1, setListingsSortOrder('sortKey'));
    expect(dispatch).toHaveBeenNthCalledWith(2, fetchListings({ skipLoading: true }));
  });

  it('onPaginationChangeHandler method should dispatches setListingsPage and fetchListings actions', () => {
    result.current.onPaginationChangeHandler(2);

    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(dispatch).toHaveBeenNthCalledWith(1, setListingsPage(2));
    expect(dispatch).toHaveBeenNthCalledWith(2, fetchListings({ skipLoading: true }));
  });

  it('onSettingsChangeHandler method should dispatches setListingTableSettings action', () => {
    result.current.onSettingsChangeHandler('checkedValues');

    expect(dispatch).toHaveBeenCalledWith(setListingTableSettings('checkedValues'));
  });

  it('onFilter method should dispatches filterListings action with passed filters', () => {
    result.current.onFilter('selectedFilters');

    expect(dispatch).toHaveBeenCalledWith(filterListings('selectedFilters'));
  });

  it('clearAllFilters method should dispatches filterListings action with LISTING_FILTERS', () => {
    result.current.clearAllFilters();

    expect(dispatch).toHaveBeenCalledWith(filterListings(LISTING_FILTERS));
  });

  it('onSearch method should dispatches setListingsSearchQuery, setListingsPage, fetchListings', () => {
    result.current.onSearch({ target: { value: 'query' } });

    jest.runAllTimers();

    expect(dispatch).toHaveBeenCalledTimes(3);

    expect(dispatch).toHaveBeenNthCalledWith(1, setListingsSearchQuery('query'));
    expect(dispatch).toHaveBeenNthCalledWith(2, setListingsPage(1));
    expect(dispatch).toHaveBeenNthCalledWith(3, fetchListings({ skipLoading: true }));
  });

  it('onUnmountHandler dispatches dataDeleteEntity', () => {
    result.current.onUnmountHandler()();

    expect(dispatch).toHaveBeenCalledWith(dataDeleteEntity('listing'));
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
    };

    it('should dispatches when user is verified', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledTimes(3);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, setListingsPage(1));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListings());
      expect(store.dispatch).toHaveBeenNthCalledWith(3, fetchListingBaseAmenities());
    });

    it('shouldn`t dispatches when user isn`t verified', async () => {
      checkUserVerification.mockReturnValueOnce(false);

      await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });
});
