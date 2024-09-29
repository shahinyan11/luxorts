import { combineReducers } from 'redux';

import { HOME_PAGINATION } from 'constants';

import * as types from 'state/concepts/publicInfo/types';

const pagination = (state = HOME_PAGINATION, action) => {
  switch (action.type) {
    case types.SET_APARTMENTS_PAGE:
      return { ...state, number: action.pageNumber };
    default:
      return state;
  }
};

const publicInfoReducer = combineReducers({
  pagination,
});

export default publicInfoReducer;
