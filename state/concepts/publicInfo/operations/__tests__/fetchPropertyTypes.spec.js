import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import fetchPropertyTypesOperation from 'state/concepts/publicInfo/operations/fetchPropertyTypes';
import { fetchPropertyTypesEndpoint } from 'state/concepts/publicInfo/endpoints';
import fetchPropertyTypesResponse from 'state/concepts/publicInfo/__mocks__/fetchPropertyTypesResponse';
import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';

jest.mock('utils/showErrorNotifications');

describe('fetchPropertyTypes operation', () => {
  let dispatch;

  const { url, endpoint } = fetchPropertyTypesEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchPropertyTypesOperation.process({ httpClient }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(fetchPropertyTypesOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'get', response: fetchPropertyTypesResponse });
    const response = normalize(fetchPropertyTypesResponse.data);

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.get).toHaveBeenCalledWith(url);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataDeleteEntity('propertyType'));
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
