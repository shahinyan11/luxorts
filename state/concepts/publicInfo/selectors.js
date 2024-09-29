import { createSelector } from 'reselect';
import { path, prop } from 'ramda';
import build from 'redux-object';

import { LANDING_TYPES } from 'constants';

import {
  citiesCountSelector,
  hostsCountSelector,
  lastPageSelector,
  propertiesCountSelector,
  selfPageSelector,
} from 'state/data/selectors';
import {
  fetchAboutUsPageDataEndpoint,
  fetchPopularApartmentsEndpoint,
} from 'state/concepts/publicInfo/endpoints';

const dataSelector = prop('data');

export const propertyTypesSelector = createSelector(
  dataSelector,
  (data) => build(data, 'propertyType') || [],
);

export const trendingLocationsSelector = createSelector(
  dataSelector,
  (data) => build(data, 'trendingLocation') || [],
);

export const paginationSelector = path(['publicInfo', 'pagination']);

export const popularApartmentsLastPageSelector = (state) =>
  lastPageSelector(state, fetchPopularApartmentsEndpoint.endpoint);

export const popularApartmentsSelfPageSelector = (state) =>
  selfPageSelector(state, fetchPopularApartmentsEndpoint.endpoint);

export const aboutUsPropertiesCountSelector = (state) =>
  propertiesCountSelector(state, fetchAboutUsPageDataEndpoint.endpoint);

export const aboutUsHostsCountSelector = (state) =>
  hostsCountSelector(state, fetchAboutUsPageDataEndpoint.endpoint);

export const aboutUsCitiesCountSelector = (state) =>
  citiesCountSelector(state, fetchAboutUsPageDataEndpoint.endpoint);

export const termsSelector = createSelector(dataSelector, (data) => {
  const staticPage = build(data, 'staticPage');

  return staticPage?.find((value) => value.kind === LANDING_TYPES.TERMS) || {};
});

export const privacyPolicySelector = createSelector(dataSelector, (data) => {
  const staticPage = build(data, 'staticPage');

  return staticPage?.find((value) => value.kind === LANDING_TYPES.POLICY) || {};
});
