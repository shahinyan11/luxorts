export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const DEFAULT_LANGUAGE_CODE = 'en';

export const NEW_YORK_COORDS = [-73.97447621784085, 40.764468117826794];

export const GOOGLE_MAPS_ADDRESS_TYPE = {
  STREET_NUMBER: 'street_number',
  ROUTE: 'route',
  LOCALITY: 'locality',
  ADMINISTRATIVE_AREA_LEVEL_1: 'administrative_area_level_1',
  COUNTRY: 'country',
  POSTAL_CODE: 'postal_code',
};

export const FIELD_NAME_BY_TYPE = {
  [GOOGLE_MAPS_ADDRESS_TYPE.STREET_NUMBER]: 'streetNumber',
  [GOOGLE_MAPS_ADDRESS_TYPE.ROUTE]: 'street',
  [GOOGLE_MAPS_ADDRESS_TYPE.LOCALITY]: 'city',
  [GOOGLE_MAPS_ADDRESS_TYPE.ADMINISTRATIVE_AREA_LEVEL_1]: 'state',
  [GOOGLE_MAPS_ADDRESS_TYPE.COUNTRY]: 'country',
  [GOOGLE_MAPS_ADDRESS_TYPE.POSTAL_CODE]: 'zipCode',
};

export const GOOGLE_MAPS_GEOCODING_TYPE = {
  LAT_LNG: 'latlng',
  ADDRESS: 'address',
};
