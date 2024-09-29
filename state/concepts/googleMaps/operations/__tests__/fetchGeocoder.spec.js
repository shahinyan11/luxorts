import axios from 'axios';

import { DEFAULT_LANGUAGE_CODE, GOOGLE_MAPS_API_KEY } from 'constants/googleMaps';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { fetchGeocoderEndpoint } from 'state/concepts/googleMaps/endpoints';
import { setGeocoder } from 'state/concepts/googleMaps/actions';
import mockedGeocoder from 'views/__mocks__/mockedGeocoder';
import mockedResponse from 'state/concepts/googleMaps/__mocks__/fetchGeocoderResponse';

import fetchGeocoder from '../fetchGeocoder';

jest.mock('axios', () => ({
  get: jest.fn(() => mockedResponse),
}));

describe('fetchGeocoder operation', () => {
  let dispatch;

  const action = {
    query: 'query',
    reverse: false,
  };

  const { endpoint, url } = fetchGeocoderEndpoint;

  const beforeFunction = () => {
    jest.clearAllMocks();
    dispatch = jest.fn();

    fetchGeocoder.process({ action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(fetchGeocoder).toMatchSnapshot();
  });

  describe('failure', () => {
    axios.get.mockReturnValueOnce(new Error());

    beforeEach(beforeFunction);

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataApiFailure({ endpoint }));
    });
  });

  describe('success', () => {
    beforeEach(beforeFunction);

    it('calls right endpoint with right params', () => {
      expect(axios.get).toHaveBeenCalledWith(url, {
        params: {
          address: action.query,
          key: GOOGLE_MAPS_API_KEY,
          language: DEFAULT_LANGUAGE_CODE,
        },
      });
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(3, setGeocoder(mockedGeocoder));
    });
  });
});
