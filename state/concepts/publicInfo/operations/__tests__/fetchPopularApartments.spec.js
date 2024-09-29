import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import fetchPopularApartmentsResponse from 'state/concepts/publicInfo/__mocks__/fetchPopularApartmentsResponse';
import fetchPopularApartmentsOperation from 'state/concepts/publicInfo/operations/fetchPopularApartments';
import { fetchPopularApartmentsEndpoint } from 'state/concepts/publicInfo/endpoints';
import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';

import mockedPagination from 'views/__mocks__/mockedPagination';

jest.mock('state/concepts/publicInfo/selectors', () => ({
  paginationSelector: jest.fn(() => mockedPagination),
}));
jest.mock('utils/showErrorNotifications');

describe('fetchPopularApartments operation', () => {
  let dispatch;

  const getState = () => ({
    publicInfo: {
      pagination: mockedPagination,
    },
  });

  const params = {
    page: mockedPagination,
  };

  const { url, endpoint } = fetchPopularApartmentsEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchPopularApartmentsOperation.process({ httpClient, getState }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(fetchPopularApartmentsOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'get', response: fetchPopularApartmentsResponse });
    const response = normalize(fetchPopularApartmentsResponse.data, { endpoint });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.get).toHaveBeenCalledWith(url, { params });
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataDeleteEntity('listing'));
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        dataApiSuccess({
          endpoint,
          response,
        }),
      );
    });
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'get',
      response: error,
      reject: true,
    });

    beforeEach(beforeFunction(httpClient));

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataApiFailure({ endpoint }));
    });

    it('sets errors', () => {
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
