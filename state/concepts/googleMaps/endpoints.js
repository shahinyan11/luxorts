import endpoint from 'utils/endpoint';
import { geocodingRoute } from 'lib/apiRoutes';

import { FETCH_GEOCODER } from './types';

// eslint-disable-next-line import/prefer-default-export
export const fetchGeocoderEndpoint = endpoint(FETCH_GEOCODER, 'GET', geocodingRoute);
