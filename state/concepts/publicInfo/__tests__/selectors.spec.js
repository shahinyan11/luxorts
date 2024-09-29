import normalize from 'json-api-normalizer';
import build from 'redux-object';

import fetchPropertyTypesResponse from 'state/concepts/publicInfo/__mocks__/fetchPropertyTypesResponse';
import fetchTrendingLocationsResponse from 'state/concepts/publicInfo/__mocks__/fetchTrendingLocationsResponse';
import fetchTermsPageDataResponse from 'state/concepts/publicInfo/__mocks__/fetchTermsPageDataResponse';
import fetchPrivacyPolicyPageDataResponse from 'state/concepts/publicInfo/__mocks__/fetchPrivacyPolicyPageDataResponse';
import {
  fetchAboutUsPageDataEndpoint,
  fetchPopularApartmentsEndpoint,
} from 'state/concepts/publicInfo/endpoints';

import mockedTerms from 'views/__mocks__/mockedTerms';
import mockedPrivacyPolicy from 'views/__mocks__/mockedPrivacyPolicy';

import {
  aboutUsCitiesCountSelector,
  aboutUsHostsCountSelector,
  aboutUsPropertiesCountSelector,
  paginationSelector,
  popularApartmentsLastPageSelector,
  popularApartmentsSelfPageSelector,
  privacyPolicySelector,
  propertyTypesSelector,
  termsSelector,
  trendingLocationsSelector,
} from '../selectors';

describe('PublicInfo selectors', () => {
  describe('propertyTypesSelector', () => {
    it('returns property types when data is present', () => {
      const state = {
        data: normalize(fetchPropertyTypesResponse.data),
      };

      expect(propertyTypesSelector(state)).toEqual(build(state.data, 'propertyType'));
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(propertyTypesSelector(state)).toEqual([]);
    });
  });

  describe('trendingLocationsSelector', () => {
    it('returns trending locations when data is present', () => {
      const state = {
        data: normalize(fetchTrendingLocationsResponse.data),
      };

      expect(trendingLocationsSelector(state)).toEqual(build(state.data, 'trendingLocation'));
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(trendingLocationsSelector(state)).toEqual([]);
    });
  });

  describe('paginationSelector', () => {
    it('returns publicInfo pagination', () => {
      const state = {
        publicInfo: { pagination: { number: 2, size: 3 } },
      };
      expect(paginationSelector(state)).toEqual(state.publicInfo.pagination);
    });
  });

  describe('popularApartmentsLastPageSelector()', () => {
    it('returns popular apartments last page', () => {
      const state = {
        data: {
          meta: {
            [fetchPopularApartmentsEndpoint.endpoint]: { links: { last: 7 } },
          },
        },
      };

      expect(popularApartmentsLastPageSelector(state)).toEqual(7);
    });
  });

  describe('popularApartmentsSelfPageSelector()', () => {
    it('returns popular apartments self page', () => {
      const state = {
        data: {
          meta: {
            [fetchPopularApartmentsEndpoint.endpoint]: { links: { self: 1 } },
          },
        },
      };

      expect(popularApartmentsSelfPageSelector(state)).toEqual(1);
    });
  });

  describe('aboutUsPropertiesCountSelector()', () => {
    it('returns properties count', () => {
      const state = {
        data: {
          meta: {
            [fetchAboutUsPageDataEndpoint.endpoint]: { meta: { propertiesCount: 1 } },
          },
        },
      };

      expect(aboutUsPropertiesCountSelector(state)).toEqual(1);
    });
  });

  describe('aboutUsHostsCountSelector()', () => {
    it('returns hosts count', () => {
      const state = {
        data: {
          meta: {
            [fetchAboutUsPageDataEndpoint.endpoint]: { meta: { hostsCount: 1 } },
          },
        },
      };

      expect(aboutUsHostsCountSelector(state)).toEqual(1);
    });
  });

  describe('aboutUsCitiesCountSelector()', () => {
    it('returns cities count', () => {
      const state = {
        data: {
          meta: {
            [fetchAboutUsPageDataEndpoint.endpoint]: { meta: { citiesCount: 1 } },
          },
        },
      };

      expect(aboutUsCitiesCountSelector(state)).toEqual(1);
    });
  });

  describe('termsSelector', () => {
    it('returns terms when data is present', () => {
      const state = {
        data: normalize(fetchTermsPageDataResponse.data),
      };

      expect(termsSelector(state)).toEqual(mockedTerms);
    });

    it('returns empty object when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(termsSelector(state)).toEqual({});
    });
  });

  describe('privacyPolicySelector', () => {
    it('returns privacy policy when data is present', () => {
      const state = {
        data: normalize(fetchPrivacyPolicyPageDataResponse.data),
      };

      expect(privacyPolicySelector(state)).toEqual(mockedPrivacyPolicy);
    });

    it('returns empty object when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(privacyPolicySelector(state)).toEqual({});
    });
  });
});
