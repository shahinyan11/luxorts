import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { fetchListingEndpoint } from 'state/concepts/listings/endpoints';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import response from 'state/concepts/listings/__mocks__/createListingResponse';

import fetchListing from '../fetchListing';

jest.mock('utils/showErrorNotifications');

describe('fetchListing operation', () => {
  let dispatch;

  const action = { listingId: 'listingId' };

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchListing.process({ httpClient, action }, dispatch, jest.fn());
  };

  const { url, endpoint } = fetchListingEndpoint(action.listingId);

  it('has valid attributes', () => {
    expect(fetchListing).toMatchSnapshot();
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
