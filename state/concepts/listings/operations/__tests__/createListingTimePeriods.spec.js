import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { createListingTimePeriodsEndpoint } from 'state/concepts/listings/endpoints';
import {
  dataApiFailure,
  dataApiRequest,
  dataApiSuccess,
  dataDeleteEntity,
} from 'state/data/actions';
import response from 'state/concepts/listings/__mocks__/fetchListingTimePeriodsResponse';

import createListingTimePeriods from '../createListingTimePeriods';

jest.mock('utils/showErrorNotifications');

describe('createListingTimePeriods operation', () => {
  let dispatch;

  const action = {
    listingId: 'listingId',
    startDate: 'startDate',
    endDate: 'endDate',
    fetchStartDate: 'fetchStartDate',
    fetchEndDate: 'fetchEndDate',
    kind: 'kind',
  };

  const body = {
    fetch_start_date: action.fetchStartDate,
    fetch_end_date: action.fetchEndDate,
    start_date: action.startDate,
    end_date: action.endDate,
    kind: action.kind,
  };

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    createListingTimePeriods.process({ httpClient, action }, dispatch, jest.fn());
  };

  const { url, endpoint } = createListingTimePeriodsEndpoint(action.listingId);

  it('matches snapshot', () => {
    expect(createListingTimePeriods).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(
        1,
        dataApiRequest({
          endpoint,
        }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(2, dataDeleteEntity('listingTimePeriod'));

      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        dataApiSuccess({
          endpoint,
          response: normalize(response.data),
        }),
      );
    });
  });

  describe('failure', () => {
    const error = new Error('test');
    const httpClient = mockHttpClient({ method: 'post', reject: true, response: error });

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
