import makeFormSubmitAction from 'utils/form/makeFormSubmitAction';

import * as types from './types';

export const createUpdateListing = makeFormSubmitAction(types.CREATE_UPDATE_LISTING);

export const fetchListings = ({ skipLoading = false, skipClearing = false } = {}) => ({
  type: types.FETCH_LISTINGS,
  skipLoading,
  skipClearing,
});

export const setListingsPage = (pageNumber) => ({
  type: types.SET_LISTINGS_PAGE,
  pageNumber,
});

export const setListingsSortOrder = (sortKey) => ({
  type: types.SET_LISTINGS_SORT_ORDER,
  sortKey,
});

export const setListingTableSettings = (settings) => ({
  type: types.SET_LISTING_TABLE_SETTINGS,
  settings,
});

export const filterListings = (filters) => ({
  type: types.FILTER_LISTINGS,
  filters,
});

export const setListingsFilterParams = (filterParams) => ({
  type: types.SET_LISTINGS_FILTER_PARAMS,
  filterParams,
});

export const setListingsSearchQuery = (query) => ({
  type: types.SET_LISTINGS_SEARCH_QUERY,
  query,
});

export const fetchListing = (listingId) => ({
  type: types.FETCH_LISTING,
  listingId,
});

export const fetchListingPropertyType = (listingId) => ({
  type: types.FETCH_LISTING_PROPERTY_TYPE,
  listingId,
});

export const fetchListingsBasePropertyTypes = () => ({
  type: types.FETCH_LISTINGS_BASE_PROPERTY_TYPES,
});

export const fetchListingAccomodation = (listingId) => ({
  type: types.FETCH_LISTING_ACCOMODATION,
  listingId,
});

export const updateListingAccomodation = makeFormSubmitAction(types.UPDATE_LISTING_ACCOMODATION);

export const fetchListingLocation = (listingId) => ({
  type: types.FETCH_LISTING_LOCATION,
  listingId,
});

export const updateListingLocation = makeFormSubmitAction(types.UPDATE_LISTING_LOCATION);

export const fetchListingBaseAmenities = () => ({
  type: types.FETCH_LISTING_BASE_AMENITIES,
});

export const fetchListingAmenities = (listingId) => ({
  type: types.FETCH_LISTING_AMENITIES,
  listingId,
});

export const updateListingAmenities = makeFormSubmitAction(types.UPDATE_LISTING_AMENITIES);

export const fetchListingBaseCapabilities = () => ({
  type: types.FETCH_LISTING_BASE_CAPABILITIES,
});

export const fetchListingCapabilities = (listingId) => ({
  type: types.FETCH_LISTING_CAPABILITIES,
  listingId,
});

export const updateListingCapabilities = makeFormSubmitAction(types.UPDATE_LISTING_CAPABILITIES);

export const fetchListingBaseServices = () => ({
  type: types.FETCH_LISTING_BASE_SERVICES,
});

export const fetchListingServices = (listingId) => ({
  type: types.FETCH_LISTING_SERVICES,
  listingId,
});

export const updateListingServices = makeFormSubmitAction(types.UPDATE_LISTING_SERVICES);

export const fetchListingPhotos = (listingId) => ({
  type: types.FETCH_LISTING_PHOTOS,
  listingId,
});

export const updateListingPhotos = makeFormSubmitAction(types.UPDATE_LISTING_PHOTOS);

export const fetchListingDescription = (listingId) => ({
  type: types.FETCH_LISTING_DESCRIPTION,
  listingId,
});

export const updateListingDescription = makeFormSubmitAction(types.UPDATE_LISTING_DESCRIPTION);

export const fetchListingBaseHouseRules = () => ({
  type: types.FETCH_LISTING_BASE_HOUSE_RULES,
});

export const fetchListingHouseRules = (listingId) => ({
  type: types.FETCH_LISTING_HOUSE_RULES,
  listingId,
});

export const updateListingHouseRules = makeFormSubmitAction(types.UPDATE_LISTING_HOUSE_RULES);

export const fetchListingReservationPreferences = (listingId) => ({
  type: types.FETCH_LISTING_RESERVATION_PREFERENCES,
  listingId,
});

export const updateListingReservationPreferences = makeFormSubmitAction(
  types.UPDATE_LISTING_RESERVATION_PREFERENCES,
);

export const fetchListingTimePeriods = ({ listingId, startDate, endDate }) => ({
  type: types.FETCH_LISTING_TIME_PERIODS,
  listingId,
  startDate,
  endDate,
});

export const createListingTimePeriods = ({
  listingId,
  startDate,
  endDate,
  fetchStartDate,
  fetchEndDate,
  kind,
}) => ({
  type: types.CREATE_LISTING_TIME_PERIODS,
  listingId,
  startDate,
  endDate,
  fetchStartDate,
  fetchEndDate,
  kind,
});

export const fetchListingPricing = (listingId) => ({
  type: types.FETCH_LISTING_PRICING,
  listingId,
});

export const updateListingPricing = makeFormSubmitAction(types.UPDATE_LISTING_PRICING);

export const updateListingStatus = ({ listingId, status, modal, message, hideModal }) => ({
  type: types.UPDATE_LISTING_STATUS,
  listingId,
  status,
  modal,
  message,
  hideModal,
});

export const updateListingAvailability = ({ listingId, redirectRoute }) => ({
  type: types.UPDATE_LISTING_AVAILABILITY,
  listingId,
  redirectRoute,
});
