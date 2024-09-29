import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { updateListingAvailabilityEndpoint } from 'state/concepts/listings/endpoints';
import response from 'state/concepts/listings/__mocks__/createListingResponse';

import updateListingAvailability from '../updateListingAvailability';

jest.mock('utils/showErrorNotifications');
jest.mock('utils/redirect');

describe('updateListingAvailability operation', () => {
  let dispatch;

  const action = {
    listingId: 'listingId',
    redirectRoute: 'redirectRoute',
  };

  const { endpoint, url } = updateListingAvailabilityEndpoint(action.listingId);

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    updateListingAvailability.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(updateListingAvailability).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));

      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
          response: normalize(response.data),
        }),
      );
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.redirectRoute);
    });
  });

  it('shouldn`t calls redirect when redirectRoute isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      redirectRoute: null,
    });

    redirect.mockClear();

    updateListingAvailability.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(redirect).not.toHaveBeenCalled();
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'put',
      reject: true,
      response: error,
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
