import normalize from 'json-api-normalizer';
import build from 'redux-object';
import moment from 'moment';

import { SORT_DIRECTIONS } from 'constants';
import { TIME_PERIOD_DESCRIPTION_BY_KIND, TIME_PERIOD_ICON_BY_KIND } from 'constants/listing';

import mockedBasePropertyTypes from 'views/__mocks__/mockedBasePropertyTypes';
import mockedAmenities from 'views/__mocks__/mockedAmenities';
import mockedCapabilities from 'views/__mocks__/mockedCapabilities';
import mockedServices from 'views/__mocks__/mockedServices';
import mockedListingPhotos from 'views/__mocks__/mockedListingPhotos';
import mockedListingHouseRules from 'views/__mocks__/mockedListingHouseRules';
import mockedListingBlockedTimePeriods from 'views/__mocks__/mockedListingBlockedTimePeriods';
import mockedListings from 'views/__mocks__/mockedListings';
import mockedListingCustomPrice from 'views/__mocks__/mockedListingCustomPrice';

import fetchBasePropertyTypesResponse from '../__mocks__/fetchBasePropertyTypesResponse';
import createListingResponse from '../__mocks__/createListingResponse';
import fetchAmenitiesResponse from '../__mocks__/fetchAmenitiesResponse';
import fetchListingAmenitiesResponse from '../__mocks__/fetchListingAmenitiesResponse';
import fetchBaseCapabilitiesResponse from '../__mocks__/fetchBaseCapabilitiesResponse';
import fetchCapabilitiesResponse from '../__mocks__/fetchCapabilitiesResponse';
import fetchBaseServicesResponse from '../__mocks__/fetchBaseServicesResponse';
import fetchServicesResponse from '../__mocks__/fetchServicesResponse';
import fetchListingPhotosResponse from '../__mocks__/fetchListingPhotosResponse';
import fetchBaseHouseRulesResponse from '../__mocks__/fetchBaseHouseRulesResponse';
import fetchHouseRulesResponse from '../__mocks__/fetchHouseRulesResponse';
import fetchListingTimePeriodsResponse from '../__mocks__/fetchListingTimePeriodsResponse';
import fetchListingsResponse from '../__mocks__/fetchListingsResponse';

import { fetchListingsEndpoint } from '../endpoints';
import {
  baseAmenitiesSelector,
  listingAmenitiesSelector,
  listingsBasePropertyTypesSelector,
  listingSelector,
  selectedListingAmenitiesSelector,
  baseCapabilitiesSelector,
  selectedListingCapabilitiesSelector,
  listingCapabilitiesSelector,
  baseServicesSelector,
  selectedListingServicesSelector,
  listingServicesSelector,
  listingPhotosSelector,
  baseHouseRulesSelector,
  selectedListingHouseRulesSelector,
  listingHouseRulesSelector,
  listingBlockedTimePeriodsSelector,
  listingsTotalSelector,
  listingsSelector,
  sortParamsSelector,
  appliedFiltersSelector,
  listingCustomPriceSelector,
  listingTimePeriodsSelector,
} from '../selectors';

describe('Listings selectors', () => {
  describe('listingSelector', () => {
    it('returns listing', () => {
      const { id } = createListingResponse.data.data;

      const state = {
        data: normalize(createListingResponse.data),
      };

      const expected = build(state.data, 'listing', id);

      expect(listingSelector(state, id)).toEqual(expected);
    });

    it('returns null when id isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingSelector(state, undefined)).toBe(null);
    });
  });

  it('listingsTotalSelector returns total listings count', () => {
    const state = {
      data: {
        meta: {
          [fetchListingsEndpoint.endpoint]: { meta: { total: 10 } },
        },
      },
    };

    expect(listingsTotalSelector(state)).toEqual(10);
  });

  it('appliedFiltersSelector returns applied filters', () => {
    const state = {
      listings: {
        filters: { foo: 'foo', bar: [], baz: 0 },
      },
    };

    expect(appliedFiltersSelector(state)).toEqual({ foo: 'foo' });
  });

  describe('listingsSelector', () => {
    it('returns listings when data is present', () => {
      const state = {
        data: normalize(fetchListingsResponse.data),
      };

      expect(listingsSelector(state)).toEqual(mockedListings);
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingsSelector(state)).toEqual([]);
    });
  });

  describe('sortParamsSelector', () => {
    describe('when direction is ascend', () => {
      const state = {
        listings: {
          sort: { sortKey: 'name', direction: SORT_DIRECTIONS.ASCEND },
        },
      };

      it('returns sortKey', () => {
        expect(sortParamsSelector(state)).toEqual('name');
      });
    });

    describe('when direction is descend', () => {
      const state = {
        listings: {
          sort: { sortKey: 'name', direction: SORT_DIRECTIONS.DESCEND },
        },
      };

      it('returns sortKey with minus sign', () => {
        expect(sortParamsSelector(state)).toEqual('-name');
      });
    });
  });

  describe('listingsBasePropertyTypesSelector', () => {
    it('returns types list when data is present', () => {
      const state = {
        data: normalize(fetchBasePropertyTypesResponse.data),
      };

      expect(listingsBasePropertyTypesSelector(state)).toEqual(mockedBasePropertyTypes);
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingsBasePropertyTypesSelector(state)).toEqual([]);
    });
  });

  describe('baseAmenitiesSelector', () => {
    it('returns base amenities when data is present', () => {
      const state = {
        data: normalize(fetchAmenitiesResponse.data),
      };

      expect(baseAmenitiesSelector(state)).toEqual(build(state.data, 'amenity'));
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(baseAmenitiesSelector(state)).toEqual([]);
    });
  });

  it('selectedListingAmenitiesSelector', () => {
    const state = {
      data: normalize(fetchListingAmenitiesResponse.data),
    };

    expect(selectedListingAmenitiesSelector(state)).toEqual(build(state.data, 'listingAmenity'));
  });

  describe('listingAmenitiesSelector', () => {
    it('returns amenities when data is present', () => {
      const state = {
        data: normalize(fetchAmenitiesResponse.data),
      };

      expect(listingAmenitiesSelector(state)).toEqual(mockedAmenities);
    });

    it('returns empty object when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingAmenitiesSelector(state)).toEqual({});
    });
  });

  it('baseCapabilitiesSelector', () => {
    const state = {
      data: normalize(fetchBaseCapabilitiesResponse.data),
    };

    expect(baseCapabilitiesSelector(state)).toEqual(build(state.data, 'capability'));
  });

  it('selectedListingCapabilitiesSelector', () => {
    const state = {
      data: normalize(fetchCapabilitiesResponse.data),
    };

    expect(selectedListingCapabilitiesSelector(state)).toEqual(
      build(state.data, 'listingCapability'),
    );
  });

  describe('listingCapabilitiesSelector', () => {
    it('returns capabilities when data is present', () => {
      const state = {
        data: normalize(fetchBaseCapabilitiesResponse.data),
      };

      expect(listingCapabilitiesSelector(state)).toEqual(mockedCapabilities);
    });

    it('returns empty object when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingCapabilitiesSelector(state)).toEqual({});
    });
  });

  it('baseServicesSelector', () => {
    const state = {
      data: normalize(fetchBaseServicesResponse.data),
    };

    expect(baseServicesSelector(state)).toEqual(build(state.data, 'service'));
  });

  it('selectedListingServicesSelector', () => {
    const state = {
      data: normalize(fetchServicesResponse.data),
    };

    expect(selectedListingServicesSelector(state)).toEqual(build(state.data, 'listingService'));
  });

  describe('listingServicesSelector', () => {
    it('returns services when data is present', () => {
      const state = {
        data: normalize(fetchBaseServicesResponse.data),
      };

      expect(listingServicesSelector(state)).toEqual(mockedServices);
    });

    it('returns empty object when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingServicesSelector(state)).toEqual({});
    });
  });

  describe('listingPhotosSelector', () => {
    it('returns photos when data is present', () => {
      const state = {
        data: normalize(fetchListingPhotosResponse.data),
      };

      expect(listingPhotosSelector(state)).toEqual(mockedListingPhotos);
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingPhotosSelector(state)).toEqual([]);
    });
  });

  it('baseHouseRulesSelector', () => {
    const state = {
      data: normalize(fetchBaseHouseRulesResponse.data),
    };

    expect(baseHouseRulesSelector(state)).toEqual(build(state.data, 'houseRule'));
  });

  it('selectedListingHouseRulesSelector', () => {
    const state = {
      data: normalize(fetchHouseRulesResponse.data),
    };

    expect(selectedListingHouseRulesSelector(state)).toEqual(build(state.data, 'listingHouseRule'));
  });

  describe('listingHouseRulesSelector', () => {
    it('returns house rules when data is present', () => {
      const state = {
        data: normalize(fetchBaseHouseRulesResponse.data),
      };

      expect(listingHouseRulesSelector(state)).toEqual(mockedListingHouseRules);
    });

    it('returns empty object when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingHouseRulesSelector(state)).toEqual({});
    });
  });

  describe('listingBlockedTimePeriodsSelector', () => {
    it('returns blocked periods when data is present', () => {
      const state = {
        data: normalize(fetchListingTimePeriodsResponse.data),
      };

      expect(listingBlockedTimePeriodsSelector(state)).toEqual(mockedListingBlockedTimePeriods);
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingBlockedTimePeriodsSelector(state)).toEqual([]);
    });
  });

  describe('listingCustomPriceSelector', () => {
    it('returns custom price when data is present', () => {
      const state = {
        data: normalize(fetchListingTimePeriodsResponse.data),
      };

      expect(listingCustomPriceSelector(state)).toEqual(mockedListingCustomPrice);
    });

    it('returns empty object when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingCustomPriceSelector(state)).toEqual({});
    });
  });

  describe('listingTimePeriodsSelector', () => {
    it('returns time periods when data is present', () => {
      const state = {
        data: normalize(fetchListingTimePeriodsResponse.data),
      };

      const listingTimePeriods = build(state.data, 'listingTimePeriod');

      const expected = listingTimePeriods.map((period) => ({
        ...period,
        start: moment(period.startDate).startOf('days').toDate(),
        end: moment(period.endDate).endOf('days').toDate(),
        description: TIME_PERIOD_DESCRIPTION_BY_KIND[period.kind],
        icon: TIME_PERIOD_ICON_BY_KIND[period.kind],
      }));

      expect(listingTimePeriodsSelector(state)).toEqual(expected);
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(listingTimePeriodsSelector(state)).toEqual([]);
    });
  });
});
