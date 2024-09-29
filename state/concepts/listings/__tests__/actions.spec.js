import assertFormSubmitAction from 'utils/testHelpers/assertFormSubmitAction';

import * as actions from '../actions';
import * as types from '../types';

it('createUpdateListing()', () => {
  assertFormSubmitAction(actions.createUpdateListing, types.CREATE_UPDATE_LISTING);
});

it('fetchListings()', () => {
  const expectedAction = { type: types.FETCH_LISTINGS, skipLoading: false, skipClearing: false };

  expect(actions.fetchListings()).toEqual(expectedAction);
});

it('setListingsPage()', () => {
  const expectedAction = { type: types.SET_LISTINGS_PAGE, pageNumber: 1 };

  expect(actions.setListingsPage(1)).toEqual(expectedAction);
});

it('setListingsSortOrder()', () => {
  const expectedAction = { type: types.SET_LISTINGS_SORT_ORDER, sortKey: 'sortKey' };

  expect(actions.setListingsSortOrder('sortKey')).toEqual(expectedAction);
});

it('setListingTableSettings()', () => {
  const expectedAction = { type: types.SET_LISTING_TABLE_SETTINGS, settings: 'settings' };

  expect(actions.setListingTableSettings('settings')).toEqual(expectedAction);
});

it('filterListings()', () => {
  const expectedAction = { type: types.FILTER_LISTINGS, filters: 'filters' };

  expect(actions.filterListings('filters')).toEqual(expectedAction);
});

it('setListingsFilterParams()', () => {
  const expectedAction = { type: types.SET_LISTINGS_FILTER_PARAMS, filterParams: 'filterParams' };

  expect(actions.setListingsFilterParams('filterParams')).toEqual(expectedAction);
});

it('setListingsSearchQuery()', () => {
  const expectedAction = { type: types.SET_LISTINGS_SEARCH_QUERY, query: 'query' };

  expect(actions.setListingsSearchQuery('query')).toEqual(expectedAction);
});

it('fetchListing()', () => {
  const expectedAction = { type: types.FETCH_LISTING, listingId: 'listingId' };

  expect(actions.fetchListing('listingId')).toEqual(expectedAction);
});

it('fetchListingPropertyType()', () => {
  const expectedAction = { type: types.FETCH_LISTING_PROPERTY_TYPE, listingId: 'listingId' };

  expect(actions.fetchListingPropertyType('listingId')).toEqual(expectedAction);
});

it('fetchListingsBasePropertyTypes()', () => {
  const expectedAction = { type: types.FETCH_LISTINGS_BASE_PROPERTY_TYPES };

  expect(actions.fetchListingsBasePropertyTypes()).toEqual(expectedAction);
});

it('fetchListingAccomodation()', () => {
  const expectedAction = { type: types.FETCH_LISTING_ACCOMODATION, listingId: 'listingId' };

  expect(actions.fetchListingAccomodation('listingId')).toEqual(expectedAction);
});

it('updateListingAccomodation()', () => {
  assertFormSubmitAction(actions.updateListingAccomodation, types.UPDATE_LISTING_ACCOMODATION);
});

it('fetchListingLocation()', () => {
  const expectedAction = { type: types.FETCH_LISTING_LOCATION, listingId: 'listingId' };

  expect(actions.fetchListingLocation('listingId')).toEqual(expectedAction);
});

it('updateListingLocation()', () => {
  assertFormSubmitAction(actions.updateListingLocation, types.UPDATE_LISTING_LOCATION);
});

it('fetchListingBaseAmenities()', () => {
  const expectedAction = { type: types.FETCH_LISTING_BASE_AMENITIES };

  expect(actions.fetchListingBaseAmenities()).toEqual(expectedAction);
});

it('fetchListingAmenities()', () => {
  const expectedAction = { type: types.FETCH_LISTING_AMENITIES, listingId: 'listingId' };

  expect(actions.fetchListingAmenities('listingId')).toEqual(expectedAction);
});

it('updateListingAmenities()', () => {
  assertFormSubmitAction(actions.updateListingAmenities, types.UPDATE_LISTING_AMENITIES);
});

it('fetchListingBaseCapabilities()', () => {
  const expectedAction = { type: types.FETCH_LISTING_BASE_CAPABILITIES };

  expect(actions.fetchListingBaseCapabilities()).toEqual(expectedAction);
});

it('fetchListingCapabilities()', () => {
  const expectedAction = { type: types.FETCH_LISTING_CAPABILITIES, listingId: 'listingId' };

  expect(actions.fetchListingCapabilities('listingId')).toEqual(expectedAction);
});

it('updateListingCapabilities()', () => {
  assertFormSubmitAction(actions.updateListingCapabilities, types.UPDATE_LISTING_CAPABILITIES);
});

it('fetchListingBaseServices()', () => {
  const expectedAction = { type: types.FETCH_LISTING_BASE_SERVICES };

  expect(actions.fetchListingBaseServices()).toEqual(expectedAction);
});

it('fetchListingServices()', () => {
  const expectedAction = { type: types.FETCH_LISTING_SERVICES, listingId: 'listingId' };

  expect(actions.fetchListingServices('listingId')).toEqual(expectedAction);
});

it('updateListingServices()', () => {
  assertFormSubmitAction(actions.updateListingServices, types.UPDATE_LISTING_SERVICES);
});

it('fetchListingPhotos()', () => {
  const expectedAction = { type: types.FETCH_LISTING_PHOTOS, listingId: 'listingId' };

  expect(actions.fetchListingPhotos('listingId')).toEqual(expectedAction);
});

it('updateListingPhotos()', () => {
  assertFormSubmitAction(actions.updateListingPhotos, types.UPDATE_LISTING_PHOTOS);
});

it('fetchListingDescription()', () => {
  const expectedAction = { type: types.FETCH_LISTING_DESCRIPTION, listingId: 'listingId' };

  expect(actions.fetchListingDescription('listingId')).toEqual(expectedAction);
});

it('updateListingDescription()', () => {
  assertFormSubmitAction(actions.updateListingDescription, types.UPDATE_LISTING_DESCRIPTION);
});

it('fetchListingBaseHouseRules()', () => {
  const expectedAction = { type: types.FETCH_LISTING_BASE_HOUSE_RULES };

  expect(actions.fetchListingBaseHouseRules()).toEqual(expectedAction);
});

it('fetchListingHouseRules()', () => {
  const expectedAction = { type: types.FETCH_LISTING_HOUSE_RULES, listingId: 'listingId' };

  expect(actions.fetchListingHouseRules('listingId')).toEqual(expectedAction);
});

it('updateListingHouseRules()', () => {
  assertFormSubmitAction(actions.updateListingHouseRules, types.UPDATE_LISTING_HOUSE_RULES);
});

it('fetchListingReservationPreferences()', () => {
  const expectedAction = {
    type: types.FETCH_LISTING_RESERVATION_PREFERENCES,
    listingId: 'listingId',
  };

  expect(actions.fetchListingReservationPreferences('listingId')).toEqual(expectedAction);
});

it('updateListingReservationPreferences()', () => {
  assertFormSubmitAction(
    actions.updateListingReservationPreferences,
    types.UPDATE_LISTING_RESERVATION_PREFERENCES,
  );
});

it('fetchListingTimePeriods()', () => {
  const action = {
    listingId: 'listingId',
    startDate: 'startDate',
    endDate: 'endDate',
  };

  const expectedAction = {
    type: types.FETCH_LISTING_TIME_PERIODS,
    ...action,
  };

  expect(actions.fetchListingTimePeriods(action)).toEqual(expectedAction);
});

it('createListingTimePeriods()', () => {
  const action = {
    listingId: 'listingId',
    startDate: 'startDate',
    endDate: 'endDate',
    fetchStartDate: 'fetchStartDate',
    fetchEndDate: 'fetchEndDate',
    kind: 'kind',
  };

  const expectedAction = {
    type: types.CREATE_LISTING_TIME_PERIODS,
    ...action,
  };

  expect(actions.createListingTimePeriods(action)).toEqual(expectedAction);
});

it('fetchListingPricing()', () => {
  const expectedAction = {
    type: types.FETCH_LISTING_PRICING,
    listingId: 'listingId',
  };

  expect(actions.fetchListingPricing('listingId')).toEqual(expectedAction);
});

it('updateListingPricing()', () => {
  assertFormSubmitAction(actions.updateListingPricing, types.UPDATE_LISTING_PRICING);
});

it('updateListingStatus()', () => {
  const action = {
    listingId: 'listingId',
    status: 'status',
    modal: 'modal',
    message: 'message',
    hideModal: 'hideModal',
  };
  const expectedAction = {
    type: types.UPDATE_LISTING_STATUS,
    ...action,
  };

  expect(actions.updateListingStatus(action)).toEqual(expectedAction);
});

it('updateListingAvailability()', () => {
  const action = { listingId: 'listingId', redirectRoute: 'redirectRoute' };
  const expectedAction = {
    type: types.UPDATE_LISTING_AVAILABILITY,
    ...action,
  };

  expect(actions.updateListingAvailability(action)).toEqual(expectedAction);
});
