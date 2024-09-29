import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import fetchUserInvitationOperation from 'state/concepts/session/operations/fetchUserInvitation';
import fetchUserInvitationResponse from 'state/concepts/session/__mocks__/fetchUserInvitationResponse';
import { fetchUserInvitationEndpoint } from 'state/concepts/session/endpoints';
import { paginationSelector } from 'state/concepts/session/selectors';
import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';

import mockedPagination from 'views/__mocks__/mockedPagination';

jest.mock('utils/showErrorNotifications');

describe('fetchUserInvitation operation', () => {
  let dispatch;

  const getState = () => ({
    session: {
      pagination: mockedPagination,
    },
  });

  const params = {
    page: paginationSelector(getState()),
  };

  const { url, endpoint } = fetchUserInvitationEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    fetchUserInvitationOperation.process({ httpClient, getState }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(fetchUserInvitationOperation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'get', response: fetchUserInvitationResponse });
    const response = normalize(fetchUserInvitationResponse.data, { endpoint });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.get).toHaveBeenCalledWith(url, { params });
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataDeleteEntity('userInvitation'));

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
