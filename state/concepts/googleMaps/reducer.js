import { combineReducers } from 'redux';

import * as types from './types';

const geocoder = (state = null, action) => {
  switch (action.type) {
    case types.SET_GEOCODER:
      return action.items;
    case types.CLEAR_GEOCODER:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  geocoder,
});
