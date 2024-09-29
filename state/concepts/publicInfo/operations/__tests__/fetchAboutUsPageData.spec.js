import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import fetchAboutUsPageDataOperation from 'state/concepts/publicInfo/operations/fetchAboutUsPageData';
import { fetchAboutUsPageDataEndpoint } from 'state/concepts/publicInfo/endpoints';
import fetchAboutUsPageDataResponse from 'state/concepts/publicInfo/__mocks__/fetchAboutUsPageDataResponse';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';

jest.mock('utils/showErrorNotifications');

describe('fetchAboutUsPageData operation', () => {
  let dispatch;

  const { url, endpoint } = fetchAboutUsPageDataEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchAboutUsPageDataOperation.process({ httpClient }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(fetchAboutUsPageDataOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'get', response: fetchAboutUsPageDataResponse });
    const response = normalize(fetchAboutUsPageDataResponse.data, { endpoint });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.get).toHaveBeenCalledWith(url);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));

      expect(dispatch).toHaveBeenNthCalledWith(
        2,
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
