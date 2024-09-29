import endpoint from 'utils/endpoint';
import {
  listingsBasePropertyTypesRoute,
  listingsRoute,
  listingRoute,
  listingPropertyTypeRoute,
  listingAccomodationRoute,
  listingLocationRoute,
  listingBaseAmenitiesRoute,
  listingAmenitiesRoute,
  listingBaseCapabilitiesRoute,
  listingCapabilitiesRoute,
  listingBaseServicesRoute,
  listingServicesRoute,
  listingPhotosRoute,
  listingDescriptionRoute,
  listingBaseHouseRulesRoute,
  listingHouseRulesRoute,
  listingReservationPreferenceRoute,
  listingTimePeriodsRoute,
  listingPricingRoute,
  listingStatusRoute,
  listingAvailabilityRoute,
} from 'lib/apiRoutes';

import * as types from './types';

export const fetchListingsEndpoint = endpoint(types.FETCH_LISTINGS, 'GET', listingsRoute);

export const createListingEndpoint = endpoint(types.CREATE_UPDATE_LISTING, 'POST', listingsRoute);

export const updateListingPropertyTypeEndpoint = (listingId) =>
  endpoint(types.CREATE_UPDATE_LISTING, 'PUT', listingPropertyTypeRoute(listingId));

export const fetchListingsBasePropertyTypesEndpoint = endpoint(
  types.FETCH_LISTINGS_BASE_PROPERTY_TYPES,
  'GET',
  listingsBasePropertyTypesRoute,
);

export const fetchListingEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING, 'GET', listingRoute(listingId));

export const fetchListingPropertyTypeEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_PROPERTY_TYPE, 'GET', listingPropertyTypeRoute(listingId));

export const fetchListingAccomodationEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_ACCOMODATION, 'GET', listingAccomodationRoute(listingId));

export const updateListingAccomodationEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_ACCOMODATION, 'PUT', listingAccomodationRoute(listingId));

export const fetchListingLocationEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_LOCATION, 'GET', listingLocationRoute(listingId));

export const updateListingLocationEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_LOCATION, 'PUT', listingLocationRoute(listingId));

export const fetchListingBaseAmenitiesEndpoint = endpoint(
  types.FETCH_LISTING_BASE_AMENITIES,
  'GET',
  listingBaseAmenitiesRoute,
);

export const fetchListingAmenitiesEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_AMENITIES, 'GET', listingAmenitiesRoute(listingId));

export const updateListingAmenitiesEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_AMENITIES, 'PUT', listingAmenitiesRoute(listingId));

export const fetchListingBaseCapabilitiesEndpoint = endpoint(
  types.FETCH_LISTING_BASE_CAPABILITIES,
  'GET',
  listingBaseCapabilitiesRoute,
);

export const fetchListingCapabilitiesEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_CAPABILITIES, 'GET', listingCapabilitiesRoute(listingId));

export const updateListingCapabilitiesEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_CAPABILITIES, 'PUT', listingCapabilitiesRoute(listingId));

export const fetchListingBaseServicesEndpoint = endpoint(
  types.FETCH_LISTING_BASE_SERVICES,
  'GET',
  listingBaseServicesRoute,
);

export const fetchListingServicesEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_SERVICES, 'GET', listingServicesRoute(listingId));

export const updateListingServicesEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_SERVICES, 'PUT', listingServicesRoute(listingId));

export const fetchListingPhotosEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_PHOTOS, 'GET', listingPhotosRoute(listingId));

export const updateListingPhotosEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_PHOTOS, 'PUT', listingPhotosRoute(listingId));

export const fetchListingDescriptionEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_DESCRIPTION, 'GET', listingDescriptionRoute(listingId));

export const updateListingDescriptionEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_DESCRIPTION, 'PUT', listingDescriptionRoute(listingId));

export const fetchListingBaseHouseRulesEndpoint = endpoint(
  types.FETCH_LISTING_BASE_HOUSE_RULES,
  'GET',
  listingBaseHouseRulesRoute,
);

export const fetchListingHouseRulesEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_HOUSE_RULES, 'GET', listingHouseRulesRoute(listingId));

export const updateListingHouseRulesEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_HOUSE_RULES, 'PUT', listingHouseRulesRoute(listingId));

export const fetchListingReservationPreferencesEndpoint = (listingId) =>
  endpoint(
    types.FETCH_LISTING_RESERVATION_PREFERENCES,
    'GET',
    listingReservationPreferenceRoute(listingId),
  );

export const updateListingReservationPreferencesEndpoint = (listingId) =>
  endpoint(
    types.UPDATE_LISTING_RESERVATION_PREFERENCES,
    'PUT',
    listingReservationPreferenceRoute(listingId),
  );

export const fetchListingTimePeriodsEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_TIME_PERIODS, 'GET', listingTimePeriodsRoute(listingId));

export const createListingTimePeriodsEndpoint = (listingId) =>
  endpoint(types.CREATE_LISTING_TIME_PERIODS, 'POST', listingTimePeriodsRoute(listingId));

export const fetchListingPricingEndpoint = (listingId) =>
  endpoint(types.FETCH_LISTING_PRICING, 'GET', listingPricingRoute(listingId));

export const updateListingPricingEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_PRICING, 'PUT', listingPricingRoute(listingId));

export const updateListingStatusEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_STATUS, 'PUT', listingStatusRoute(listingId));

export const updateListingAvailabilityEndpoint = (listingId) =>
  endpoint(types.UPDATE_LISTING_AVAILABILITY, 'PUT', listingAvailabilityRoute(listingId));
