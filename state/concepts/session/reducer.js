import { combineReducers } from 'redux';
import { mergeDeepRight } from 'ramda';

import { PAGE } from 'constants';

import * as types from 'state/concepts/session/types';

const currentUser = (state = null, action) => {
  switch (action.type) {
    case types.USER_SIGN_IN_SUCCESS:
      return action.currentUser;
    case types.UPDATE_USER:
      return mergeDeepRight(state, action.userData);
    case types.USER_SIGN_OUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const pagination = (state = PAGE, action) => {
  switch (action.type) {
    case types.SET_INVITATIONS_PAGE:
      return { ...state, number: action.pageNumber };
    default:
      return state;
  }
};

const sessionReducer = combineReducers({
  currentUser,
  pagination,
});

export default sessionReducer;
