import normalize from 'json-api-normalizer';
import { NOT_FOUND } from 'http-status';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { fetchListingHouseRulesEndpoint } from 'state/concepts/listings/endpoints';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import response from 'state/concepts/listings/__mocks__/fetchHouseRulesResponse';

import fetchListingHouseRules from '../fetchListingHouseRules';

jest.mock('utils/showErrorNotifications');

describe('fetchListingHouseRules operation', () => {
  let dispatch;

  const action = { listingId: 'listingId' };

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchListingHouseRules.process({ httpClient, action }, dispatch, jest.fn());
  };

  const { url, endpoint } = fetchListingHouseRulesEndpoint(action.listingId);

  it('matches snapshot', () => {
    expect(fetchListingHouseRules).toMatchSnapshot();
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

  describe('failure when errors response status equals 404', () => {
    const httpClient = mockHttpClient({
      method: 'get',
      response: {
        response: {
          status: NOT_FOUND,
        },
      },
      reject: true,
    });

    beforeEach(beforeFunction(httpClient));

    it('shouldn`t calls showErrorNotifications ', () => {
      expect(showErrorNotifications).not.toHaveBeenCalled();
    });
  });
});
