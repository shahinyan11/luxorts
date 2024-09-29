import * as actions from '../actions';
import * as types from '../types';

it('fetchGeocoder()', () => {
  const action = { query: 'query', reverse: true };
  const expectedAction = { type: types.FETCH_GEOCODER, ...action };

  expect(actions.fetchGeocoder(action)).toEqual(expectedAction);
});

it('setGeocoder()', () => {
  const expectedAction = { type: types.SET_GEOCODER, items: 'items' };

  expect(actions.setGeocoder('items')).toEqual(expectedAction);
});

it('clearGeocoder()', () => {
  const expectedAction = { type: types.CLEAR_GEOCODER };

  expect(actions.clearGeocoder()).toEqual(expectedAction);
});
