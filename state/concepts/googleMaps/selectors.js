import { pathOr } from 'ramda';

// eslint-disable-next-line import/prefer-default-export
export const geocoderSelector = pathOr([], ['googleMaps', 'geocoder']);
