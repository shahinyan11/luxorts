import normalize from 'json-api-normalizer';
import { NOT_FOUND } from 'http-status';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { fetchListingsEndpoint } from 'state/concepts/listings/endpoints';
import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';
import response from 'state/concepts/listings/__mocks__/fetchListingsResponse';
import { setListingsPage } from 'state/concepts/listings/actions';

import mockedPagination from 'views/__mocks__/mockedPagination';

import fetchListings from '../fetchListings';

jest.mock('state/concepts/listings/selectors', () => ({
  paginationSelector: jest.fn(() => mockedPagination),
  sortParamsSelector: () => 'sort',
  appliedFiltersSelector: () => 'filter',
  searchQuerySelector: () => 'search',
}));
jest.mock('utils/showErrorNotifications');

describe('fetchListings operation', () => {
  let dispatch;
  const { url, endpoint } = fetchListingsEndpoint;
  const params = {
    page: mockedPagination,
    sort: 'sort',
    filter: 'filter',
    search: 'search',
  };

  const action = {
    skipLoading: false,
    skipClearing: false,
  };

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchListings.process({ action, httpClient, getState: jest.fn }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(fetchListings).toMatchSnapshot();
  });

  it('shouldn`t dispatches dataApiRequest when action.skipLoading equals true', () => {
    const httpClient = mockHttpClient({ method: 'get', response });
    dispatch = jest.fn();

    fetchListings.process(
      { action: { skipLoading: true }, httpClient, getState: jest.fn },
      dispatch,
      jest.fn(),
    );

    expect(dispatch).not.toHaveBeenCalledWith(
      dataApiRequest({
        endpoint,
      }),
    );
  });

  it('shouldn`t dispatches dataDeleteEntity when action.skipClearing equals true', () => {
    const httpClient = mockHttpClient({ method: 'get', response });
    dispatch = jest.fn();

    fetchListings.process(
      { action: { skipClearing: true }, httpClient, getState: jest.fn },
      dispatch,
      jest.fn(),
    );

    expect(dispatch).not.toHaveBeenCalledWith(dataDeleteEntity('listing'));
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'get', response });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.spy).toHaveBeenCalledWith(url, { params });
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(4);

      expect(dispatch).toHaveBeenNthCalledWith(
        1,
        dataApiRequest({
          endpoint,
        }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(2, dataDeleteEntity('listing'));

      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        dataApiSuccess({ response: normalize(response.data, { endpoint }), endpoint }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(4, setListingsPage(response.data.links.self));
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
