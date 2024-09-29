import { SORT_DIRECTIONS } from 'constants';
import {
  LISTING_FILTERS,
  LISTING_PAGINATION,
  LISTING_SORT,
  LISTING_SORT_KEY,
  LISTING_TABLE_DEFAULT_COLUMNS_SETTINGS,
} from 'constants/listing/manageListings';

import reducer from '../reducer';
import * as types from '../types';

describe('Listings', () => {
  describe('pagination reducer', () => {
    const initialState = LISTING_PAGINATION;

    it('should returns initial state', () => {
      expect(reducer(undefined, {}).pagination).toEqual(initialState);
    });

    it('should handles SET_LISTINGS_PAGE', () => {
      const action = {
        type: types.SET_LISTINGS_PAGE,
        pageNumber: 2,
      };

      expect(reducer(undefined, action).pagination).toEqual({ ...initialState, number: 2 });
    });
  });

  describe('sort reducer', () => {
    const initialState = LISTING_SORT;

    it('should returns initial state', () => {
      expect(reducer(undefined, {}).sort).toEqual(initialState);
    });

    describe('when action sortKey equals state sortKey', () => {
      it('should handles SET_LISTINGS_SORT_ORDER', () => {
        const action = {
          type: types.SET_LISTINGS_SORT_ORDER,
          sortKey: initialState.sortKey,
        };

        expect(reducer(undefined, action).sort).toEqual({
          ...initialState,
          direction: SORT_DIRECTIONS.ASCEND,
        });
      });
    });

    describe('when action sortKey does not equals state sortKey', () => {
      it('should handles SET_LISTINGS_SORT_ORDER', () => {
        const action = {
          type: types.SET_LISTINGS_SORT_ORDER,
          sortKey: LISTING_SORT_KEY.BATHROOMS_AMOUNT,
        };

        expect(reducer(undefined, action).sort).toEqual({
          sortKey: LISTING_SORT_KEY.BATHROOMS_AMOUNT,
          direction: SORT_DIRECTIONS.DESCEND,
        });
      });
    });
  });

  describe('filters reducer', () => {
    const initialState = LISTING_FILTERS;

    it('should return initial state', () => {
      expect(reducer(undefined, {}).filters).toEqual(initialState);
    });

    it('should handles SET_LISTINGS_FILTER_PARAMS', () => {
      const action = {
        type: types.SET_LISTINGS_FILTER_PARAMS,
        filterParams: { name: 'name' },
      };

      expect(reducer(undefined, action).filters).toEqual({ ...initialState, name: 'name' });
    });
  });

  describe('searchQuery reducer', () => {
    const initialState = null;

    it('should returns initial state', () => {
      expect(reducer(undefined, {}).searchQuery).toEqual(initialState);
    });

    it('should handles SET_LISTINGS_SEARCH_QUERY', () => {
      const action = {
        type: types.SET_LISTINGS_SEARCH_QUERY,
        query: 'query',
      };

      expect(reducer(undefined, action).searchQuery).toEqual('query');
    });
  });

  describe('listingTableSettings reducer', () => {
    const initialState = LISTING_TABLE_DEFAULT_COLUMNS_SETTINGS;

    it('should returns initial state', () => {
      expect(reducer(undefined, {}).listingTableSettings).toEqual(initialState);
    });

    it('should handles SET_LISTING_TABLE_SETTINGS', () => {
      const action = {
        type: types.SET_LISTING_TABLE_SETTINGS,
        settings: 'settings',
      };

      expect(reducer(undefined, action).listingTableSettings).toEqual('settings');
    });
  });
});
