import { combineReducers } from 'redux';

import { SORT_DIRECTIONS } from 'constants';
import {
  LISTING_FILTERS,
  LISTING_PAGINATION,
  LISTING_SORT,
  LISTING_TABLE_DEFAULT_COLUMNS_SETTINGS,
} from 'constants/listing/manageListings';

import {
  SET_LISTING_TABLE_SETTINGS,
  SET_LISTINGS_FILTER_PARAMS,
  SET_LISTINGS_PAGE,
  SET_LISTINGS_SEARCH_QUERY,
  SET_LISTINGS_SORT_ORDER,
} from './types';

const pagination = (state = LISTING_PAGINATION, action) => {
  switch (action.type) {
    case SET_LISTINGS_PAGE:
      return { ...state, number: action.pageNumber };
    default:
      return state;
  }
};

const sort = (state = LISTING_SORT, action) => {
  switch (action.type) {
    case SET_LISTINGS_SORT_ORDER:
      return state.sortKey === action.sortKey
        ? {
            ...state,
            direction:
              state.direction === SORT_DIRECTIONS.ASCEND
                ? SORT_DIRECTIONS.DESCEND
                : SORT_DIRECTIONS.ASCEND,
          }
        : { sortKey: action.sortKey, direction: SORT_DIRECTIONS.DESCEND };
    default:
      return state;
  }
};

const filters = (state = LISTING_FILTERS, action) => {
  switch (action.type) {
    case SET_LISTINGS_FILTER_PARAMS:
      return { ...state, ...action.filterParams };
    default:
      return state;
  }
};

const searchQuery = (state = null, action) => {
  switch (action.type) {
    case SET_LISTINGS_SEARCH_QUERY:
      return action.query;
    default:
      return state;
  }
};

const listingTableSettings = (state = LISTING_TABLE_DEFAULT_COLUMNS_SETTINGS, action) => {
  switch (action.type) {
    case SET_LISTING_TABLE_SETTINGS:
      return action.settings;
    default:
      return state;
  }
};

export default combineReducers({
  pagination,
  sort,
  filters,
  searchQuery,
  listingTableSettings,
});
