import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import fetchPrivacyPolicyPageDataOperation from 'state/concepts/publicInfo/operations/fetchPrivacyPolicyPageData';
import { fetchPrivacyPolicyPageDataEndpoint } from 'state/concepts/publicInfo/endpoints';
import fetchPrivacyPolicyPageDataResponse from 'state/concepts/publicInfo/__mocks__/fetchPrivacyPolicyPageDataResponse';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';

jest.mock('utils/showErrorNotifications');

describe('fetchPrivacyPolicyPageData operation', () => {
  let dispatch;

  const { url, endpoint } = fetchPrivacyPolicyPageDataEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchPrivacyPolicyPageDataOperation.process({ httpClient }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(fetchPrivacyPolicyPageDataOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({
      method: 'get',
      response: fetchPrivacyPolicyPageDataResponse,
    });
    const response = normalize(fetchPrivacyPolicyPageDataResponse.data);

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
