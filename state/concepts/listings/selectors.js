import { createSelector } from 'reselect';
import build from 'redux-object';
import { compose, defaultTo, map, prop, path, pathOr } from 'ramda';
import moment from 'moment';

import { APPROVED, DATE_FORMAT, NOT_APPROVED, SORT_DIRECTIONS } from 'constants';
import { ACTIVE } from 'constants/statuses';
import {
  TIME_PERIOD_DESCRIPTION_BY_KIND,
  TIME_PERIOD_ICON_BY_KIND,
  TIME_PERIOD_KIND,
} from 'constants/listing';

import equalsByPath from 'utils/equalsByPath';
import isPresent from 'utils/isPresent';
import sortByPositionHelper from 'utils/sortByPositionHelper';

import { totalCountSelector } from 'state/data/selectors';

import { fetchListingsEndpoint } from './endpoints';

const dataSelector = prop('data');

export const listingsTotalSelector = (state) =>
  totalCountSelector(state, fetchListingsEndpoint.endpoint);

export const listingsSelector = createSelector(
  dataSelector,
  (data) => build(data, 'listing') || [],
);

export const paginationSelector = path(['listings', 'pagination']);

export const sortSelector = path(['listings', 'sort']);

export const sortParamsSelector = createSelector(sortSelector, ({ sortKey, direction }) =>
  direction === SORT_DIRECTIONS.ASCEND ? sortKey : `-${sortKey}`,
);

export const listingTableSettingsSelector = path(['listings', 'listingTableSettings']);

export const filtersSelector = path(['listings', 'filters']);

export const appliedFiltersSelector = createSelector(filtersSelector, (filters) =>
  Object.keys(filters).reduce((acc, current) => {
    const item = filters[current];

    // pass only none-empty filter values
    return {
      ...acc,
      ...((item > 0 || item.length > 0) && {
        [current]: item,
      }),
    };
  }, {}),
);

export const searchQuerySelector = pathOr(undefined, ['listings', 'searchQuery']);

export const listingSelector = createSelector(
  (_, id) => id,
  dataSelector,
  (id, data) => {
    if (!isPresent(id)) {
      return null;
    }

    return build(data, 'listing', id);
  },
);

export const listingsBasePropertyTypesSelector = createSelector(dataSelector, (data) => {
  const propertyTypes = build(data, 'propertyType');

  return compose(
    map(({ id, name, description }) => ({
      value: id,
      label: name,
      description,
    })),
    defaultTo([]),
  )(propertyTypes);
});

export const baseAmenitiesSelector = createSelector(
  dataSelector,
  (data) => build(data, 'amenity') || [],
);

export const selectedListingAmenitiesSelector = createSelector(dataSelector, (data) =>
  build(data, 'listingAmenity'),
);

export const listingAmenitiesSelector = createSelector(
  baseAmenitiesSelector,
  selectedListingAmenitiesSelector,
  (base, selected) => {
    if (!isPresent(base)) {
      return {};
    }

    // form amenities by group name, e.g. { Bathroom: {1:{}, 2:{}} }
    return base.reduce((acc, { amenityGroup, ...current }) => {
      const groupName = amenityGroup?.name || NOT_APPROVED;
      const group = acc[groupName];

      const listingAmenity = selected?.find(equalsByPath(current.id, ['amenity', 'id']));
      const item = {
        ...current,
        checked: isPresent(listingAmenity),
        selectedId: listingAmenity?.id,
      };

      return {
        ...acc,
        [groupName]: { ...group, [item.id]: item },
      };
    }, {});
  },
);

export const baseCapabilitiesSelector = createSelector(dataSelector, (data) =>
  build(data, 'capability'),
);

export const selectedListingCapabilitiesSelector = createSelector(dataSelector, (data) =>
  build(data, 'listingCapability'),
);

export const listingCapabilitiesSelector = createSelector(
  baseCapabilitiesSelector,
  selectedListingCapabilitiesSelector,
  (base, selected) => {
    if (!isPresent(base)) {
      return {};
    }

    // form capabilities by status, e.g. { APPROVED: {1:{}}, NOT_APPROVED: {2:{}} }
    return base.reduce((acc, current) => {
      const groupName = current.status === ACTIVE ? APPROVED : NOT_APPROVED;
      const group = acc[groupName];

      const listingCapability = selected?.find(equalsByPath(current.id, ['capability', 'id']));
      const item = {
        ...current,
        checked: isPresent(listingCapability),
        selectedId: listingCapability?.id,
      };

      return {
        ...acc,
        [groupName]: { ...group, [item.id]: item },
      };
    }, {});
  },
);

export const baseServicesSelector = createSelector(dataSelector, (data) => build(data, 'service'));

export const selectedListingServicesSelector = createSelector(dataSelector, (data) =>
  build(data, 'listingService'),
);

export const listingServicesSelector = createSelector(
  baseServicesSelector,
  selectedListingServicesSelector,
  (base, selected) => {
    if (!isPresent(base)) {
      return {};
    }

    // form services by status, e.g. { APPROVED: {1:{}}, NOT_APPROVED: {2:{}} }
    return base.reduce((acc, current) => {
      const groupName = current.status === ACTIVE ? APPROVED : NOT_APPROVED;
      const group = acc[groupName];

      const listingService = selected?.find(equalsByPath(current.id, ['service', 'id']));
      const item = {
        ...current,
        checked: isPresent(listingService),
        selectedId: listingService?.id,
        paid: Boolean(listingService?.paid),
      };

      return {
        ...acc,
        [groupName]: { ...group, [item.id]: item },
      };
    }, {});
  },
);

export const listingPhotosSelector = createSelector(dataSelector, (data) => {
  const listingPhotos = build(data, 'listingPhoto');

  if (!listingPhotos) {
    return [];
  }

  return listingPhotos
    .map((photo) => ({
      ...photo,
      src: photo.photoUrls?.medium,
      delete: false,
    }))
    .sort(sortByPositionHelper);
});

export const baseHouseRulesSelector = createSelector(dataSelector, (data) =>
  build(data, 'houseRule'),
);

export const selectedListingHouseRulesSelector = createSelector(dataSelector, (data) =>
  build(data, 'listingHouseRule'),
);

export const listingHouseRulesSelector = createSelector(
  baseHouseRulesSelector,
  selectedListingHouseRulesSelector,
  (base, selected) => {
    if (!isPresent(base)) {
      return {};
    }

    // form house rules by status, e.g. { APPROVED: {1:{}}, NOT_APPROVED: {2:{}} }
    return base.reduce((acc, current) => {
      const groupName = current.status === ACTIVE ? APPROVED : NOT_APPROVED;
      const group = acc[groupName];

      const listingHouseRule = selected?.find(equalsByPath(current.id, ['houseRule', 'id']));
      const item = {
        ...current,
        checked: isPresent(listingHouseRule),
        selectedId: listingHouseRule?.id,
      };

      return {
        ...acc,
        [groupName]: { ...group, [item.id]: item },
      };
    }, {});
  },
);

export const listingTimePeriodsSelector = createSelector(dataSelector, (data) => {
  const listingTimePeriods = build(data, 'listingTimePeriod');

  if (!isPresent(listingTimePeriods)) {
    return [];
  }

  return listingTimePeriods.map((period) => ({
    ...period,
    start: moment(period.startDate).startOf('days').toDate(),
    end: moment(period.endDate).endOf('days').toDate(),
    description: TIME_PERIOD_DESCRIPTION_BY_KIND[period.kind],
    icon: TIME_PERIOD_ICON_BY_KIND[period.kind],
  }));
});

export const listingCustomPriceSelector = createSelector(dataSelector, (data) => {
  const listingTimePeriods = build(data, 'listingTimePeriod');

  if (!isPresent(listingTimePeriods)) {
    return {};
  }

  const customPricingPeriod = {};

  listingTimePeriods
    .filter((period) => period.kind === TIME_PERIOD_KIND.AVAILABLE)
    .forEach((period) => {
      const periodPrice = period?.listingTimePeriodPricing?.pricePerDay;

      const startDate = moment(period.startDate);
      const endDate = moment(period.endDate);

      customPricingPeriod[startDate.format(DATE_FORMAT)] = periodPrice;

      while (startDate < endDate) {
        startDate.add(1, 'days');
        customPricingPeriod[startDate.format(DATE_FORMAT)] = periodPrice;
      }
    });

  return customPricingPeriod;
});

export const listingBlockedTimePeriodsSelector = createSelector(dataSelector, (data) => {
  const listingTimePeriods = build(data, 'listingTimePeriod');

  if (!isPresent(listingTimePeriods)) {
    return [];
  }

  const blockedPeriods = [];
  for (let i = 0; i < listingTimePeriods.length; i += 1) {
    const period = listingTimePeriods[i];
    const startDate = moment(period.startDate);
    const endDate = moment(period.endDate);

    if (period.kind !== TIME_PERIOD_KIND.BLOCKED) {
      // eslint-disable-next-line no-continue
      continue;
    }

    blockedPeriods.push(startDate.format(DATE_FORMAT));

    while (startDate < endDate) {
      startDate.add(1, 'days');

      blockedPeriods.push(startDate.format(DATE_FORMAT));
    }
  }

  return Array.from(new Set(blockedPeriods));
});
