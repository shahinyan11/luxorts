import axios from 'axios';
import { createLogic } from 'redux-logic';

import {
  DEFAULT_LANGUAGE_CODE,
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_GEOCODING_TYPE,
} from 'constants/googleMaps';

import parseAddressComponents from 'utils/googleMaps/parseAddressComponents';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { FETCH_GEOCODER } from 'state/concepts/googleMaps/types';
import { fetchGeocoderEndpoint } from 'state/concepts/googleMaps/endpoints';
import { setGeocoder } from 'state/concepts/googleMaps/actions';

const fetchGeocoder = createLogic({
  type: FETCH_GEOCODER,
  latest: true,

  async process({ action }, dispatch, done) {
    const { url, endpoint } = fetchGeocoderEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    const fieldQuery = action.reverse
      ? GOOGLE_MAPS_GEOCODING_TYPE.LAT_LNG
      : GOOGLE_MAPS_GEOCODING_TYPE.ADDRESS;

    try {
      const { data } = await axios.get(url, {
        params: {
          [fieldQuery]: action.query,
          key: GOOGLE_MAPS_API_KEY,
          language: DEFAULT_LANGUAGE_CODE,
        },
      });

      const items = data.results.map((item) => {
        const details = parseAddressComponents(item.address_components);

        return {
          ...details,
          street: details?.streetNumber
            ? `${details.streetNumber} ${details.street}`
            : details.street,
          fullAddress: item.formatted_address,
          longitude: item.geometry.location.lng,
          latitude: item.geometry.location.lat,
        };
      });

      dispatch(dataApiSuccess({ endpoint }));
      dispatch(setGeocoder(items));
    } catch {
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchGeocoder;
