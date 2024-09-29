import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { fetchListingBaseServicesEndpoint } from 'state/concepts/listings/endpoints';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import response from 'state/concepts/listings/__mocks__/fetchBaseServicesResponse';

import fetchListingBaseServices from '../fetchListingBaseServices';

jest.mock('utils/showErrorNotifications');

describe('fetchListingBaseServices operation', () => {
  let dispatch;
  const { url, endpoint } = fetchListingBaseServicesEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchListingBaseServices.process({ httpClient }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(fetchListingBaseServices).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'get', response });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.get).toHaveBeenCalledWith(url);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(
        1,
        dataApiRequest({
          endpoint,
        }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
          response: normalize(response.data),
        }),
      );
    });
  });

  describe('failure', () => {
    const error = new Error('test');
    const httpClient = mockHttpClient({ method: 'get', reject: true, response: error });

    beforeEach(beforeFunction(httpClient));

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(
        1,
        dataApiRequest({
          endpoint,
        }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiFailure({
          endpoint,
        }),
      );
    });

    it('sets errors', () => {
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
