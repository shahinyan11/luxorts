import mockedGeocoder from 'views/__mocks__/mockedGeocoder';

import * as types from '../types';
import reducer from '../reducer';

const initialState = {
  geocoder: null,
};

describe('Google maps reducers', () => {
  describe('geocoder reducer', () => {
    it('returns initial state', () => {
      const { geocoder } = reducer(undefined, {});

      expect(geocoder).toEqual(initialState.geocoder);
    });

    it('handles SET_GEOCODER', () => {
      const action = {
        type: types.SET_GEOCODER,
        items: mockedGeocoder,
      };

      const { geocoder } = reducer(initialState, action);

      expect(geocoder).toEqual(mockedGeocoder);
    });

    it('handles CLEAR_GEOCODER', () => {
      const action = {
        type: types.CLEAR_GEOCODER,
      };

      const state = {
        geocoder: mockedGeocoder,
      };

      const { geocoder } = reducer(state, action);

      expect(geocoder).toEqual(null);
    });
  });
});
