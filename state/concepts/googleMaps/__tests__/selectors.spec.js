import mockedGeocoder from 'views/__mocks__/mockedGeocoder';

import { geocoderSelector } from '../selectors';

describe('Google maps selectors', () => {
  describe('geocoderSelector()', () => {
    const state = {
      googleMaps: { geocoder: mockedGeocoder },
    };

    it('returns geocoder list when geocoder has items', () => {
      expect(geocoderSelector(state)).toEqual(mockedGeocoder);
    });

    it('returns empty array when geocoder has not items', () => {
      expect(geocoderSelector({})).toEqual([]);
    });
  });
});
