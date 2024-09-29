import endpoint from 'utils/endpoint';
import {
  aboutUsRoute,
  contactUsRequestRoute,
  homePopularApartmentsRoute,
  homePropertyTypesRoute,
  homeTrendingLocationsRoute,
  termsRoute,
  privacyPolicyRoute,
} from 'lib/apiRoutes';

import * as types from './types';

export const fetchPopularApartmentsEndpoint = endpoint(
  types.FETCH_POPULAR_APARTMENTS,
  'GET',
  homePopularApartmentsRoute,
);

export const fetchPropertyTypesEndpoint = endpoint(
  types.FETCH_PROPERTY_TYPES,
  'GET',
  homePropertyTypesRoute,
);

export const fetchTrendingLocationsEndpoint = endpoint(
  types.FETCH_TRENDING_LOCATIONS,
  'GET',
  homeTrendingLocationsRoute,
);

export const fetchAboutUsPageDataEndpoint = endpoint(
  types.FETCH_ABOUT_US_PAGE_DATA,
  'GET',
  aboutUsRoute,
);

export const fetchTermsPageDataEndpoint = endpoint(types.FETCH_TERMS_PAGE_DATA, 'GET', termsRoute);

export const contactUsRequestEndpoint = endpoint(
  types.CONTACT_US_REQUEST,
  'POST',
  contactUsRequestRoute,
);

export const fetchPrivacyPolicyPageDataEndpoint = endpoint(
  types.FETCH_PRIVACY_POLICY_PAGE_DATA,
  'GET',
  privacyPolicyRoute,
);
