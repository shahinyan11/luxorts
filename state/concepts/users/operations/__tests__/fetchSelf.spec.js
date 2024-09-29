import normalize from 'json-api-normalizer';
import build from 'redux-object';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';

import { fetchSelfEndpoint } from 'state/concepts/users/endpoints';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { userSignInSuccess } from 'state/concepts/session/actions';

import fetchSelfResponse from 'state/concepts/users/__mocks__/fetchSelfResponse';
import fetchSelfOperation from '../fetchSelf';

describe('fetchSelfOperation', () => {
  let dispatch;
  const { url, endpoint } = fetchSelfEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchSelfOperation.process({ httpClient }, dispatch, jest.fn());
  };

  it('has valid attributes', () => {
    expect(fetchSelfOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'get', response: fetchSelfResponse });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint', () => {
      expect(httpClient.spy).toHaveBeenCalledWith(url);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(
        1,
        dataApiRequest({
          endpoint,
        }),
      );

      const response = normalize(fetchSelfResponse.data, { endpoint });
      const currentUser = build(response, 'travellerAccount', fetchSelfResponse.data.data.id);

      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
          response,
        }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(3, userSignInSuccess(currentUser));
    });
  });

  describe('failure', () => {
    const httpClient = mockHttpClient({ method: 'get', reject: true });

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
  });
});
