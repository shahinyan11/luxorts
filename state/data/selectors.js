import { createSelector } from 'reselect';
import { path, pathOr, prop, propOr } from 'ramda';

const metaSelector = (state) => state.data.meta;

export const metaSelectorCreator = () =>
  createSelector((_, endpoint) => endpoint, path(['data', 'meta']), prop);

export const loadingSelectorCreator = () =>
  createSelector(metaSelectorCreator(), (endpointData) => endpointData?.loading || false);

export const loadingSelector = createSelector(
  metaSelector,
  (_, endpoint) => endpoint,
  (meta, endpoint) => meta[endpoint] && meta[endpoint].loading,
);

export const endpointMetaSelector = createSelector(
  metaSelector,
  (_, endpoint) => endpoint,
  (meta, endpoint) => pathOr({}, [endpoint, 'meta'], meta),
);

export const linksSelector = createSelector(
  metaSelector,
  (_, endpoint) => endpoint,
  (meta, endpoint) => path([endpoint, 'links'], meta),
);

export const newPhoneSelector = createSelector(endpointMetaSelector, prop('newPhone'));

export const totalCountSelector = createSelector(endpointMetaSelector, propOr(0, 'total'));

export const passwordUpdatedAtSelector = createSelector(
  endpointMetaSelector,
  prop('passwordUpdatedAt'),
);

export const lastPageSelector = createSelector(linksSelector, prop('last'));

export const selfPageSelector = createSelector(linksSelector, prop('self'));

export const propertiesCountSelector = createSelector(
  endpointMetaSelector,
  prop('propertiesCount'),
);

export const hostsCountSelector = createSelector(endpointMetaSelector, prop('hostsCount'));

export const citiesCountSelector = createSelector(endpointMetaSelector, prop('citiesCount'));
