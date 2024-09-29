import * as types from './types';

export const fetchGeocoder = ({ query, reverse = false }) => ({
  type: types.FETCH_GEOCODER,
  query,
  reverse,
});

export const setGeocoder = (items) => ({
  type: types.SET_GEOCODER,
  items,
});

export const clearGeocoder = () => ({
  type: types.CLEAR_GEOCODER,
});
