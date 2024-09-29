import assertFormSubmitAction from 'utils/testHelpers/assertFormSubmitAction';

import * as actions from '../actions';
import * as types from '../types';

it('fetchPopularApartments()', () => {
  const expectedAction = {
    type: types.FETCH_POPULAR_APARTMENTS,
  };

  expect(actions.fetchPopularApartments()).toEqual(expectedAction);
});

it('fetchPropertyTypes()', () => {
  const expectedAction = {
    type: types.FETCH_PROPERTY_TYPES,
  };

  expect(actions.fetchPropertyTypes()).toEqual(expectedAction);
});

it('fetchTrendingLocations()', () => {
  const expectedAction = {
    type: types.FETCH_TRENDING_LOCATIONS,
  };

  expect(actions.fetchTrendingLocations()).toEqual(expectedAction);
});

it('fetchHomePageData()', () => {
  const expectedAction = {
    type: types.FETCH_HOME_PAGE_DATA,
  };

  expect(actions.fetchHomePageData()).toEqual(expectedAction);
});

it('setApartmentsPage()', () => {
  const expectedAction = {
    type: types.SET_APARTMENTS_PAGE,
    pageNumber: 1,
  };

  expect(actions.setApartmentsPage(1)).toEqual(expectedAction);
});

it('fetchAboutUsPageData()', () => {
  const expectedAction = {
    type: types.FETCH_ABOUT_US_PAGE_DATA,
  };

  expect(actions.fetchAboutUsPageData()).toEqual(expectedAction);
});

it('fetchTermsPageData()', () => {
  const expectedAction = {
    type: types.FETCH_TERMS_PAGE_DATA,
  };

  expect(actions.fetchTermsPageData()).toEqual(expectedAction);
});

it('contactUsRequest()', () => {
  assertFormSubmitAction(actions.contactUsRequest, types.CONTACT_US_REQUEST);
});

it('fetchPrivacyPolicyPageData()', () => {
  const expectedAction = {
    type: types.FETCH_PRIVACY_POLICY_PAGE_DATA,
  };

  expect(actions.fetchPrivacyPolicyPageData()).toEqual(expectedAction);
});
