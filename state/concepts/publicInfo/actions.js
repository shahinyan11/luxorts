import makeFormSubmitAction from 'utils/form/makeFormSubmitAction';

import * as types from 'state/concepts/publicInfo/types';

export const fetchPopularApartments = () => ({
  type: types.FETCH_POPULAR_APARTMENTS,
});

export const fetchPropertyTypes = () => ({
  type: types.FETCH_PROPERTY_TYPES,
});

export const fetchTrendingLocations = () => ({
  type: types.FETCH_TRENDING_LOCATIONS,
});

export const fetchHomePageData = () => ({
  type: types.FETCH_HOME_PAGE_DATA,
});

export const setApartmentsPage = (pageNumber) => ({
  type: types.SET_APARTMENTS_PAGE,
  pageNumber,
});

export const fetchAboutUsPageData = () => ({
  type: types.FETCH_ABOUT_US_PAGE_DATA,
});

export const fetchTermsPageData = () => ({
  type: types.FETCH_TERMS_PAGE_DATA,
});

export const contactUsRequest = makeFormSubmitAction(types.CONTACT_US_REQUEST);

export const fetchPrivacyPolicyPageData = () => ({
  type: types.FETCH_PRIVACY_POLICY_PAGE_DATA,
});
