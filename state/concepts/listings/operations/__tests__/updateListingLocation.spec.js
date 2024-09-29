import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';
import redirect from 'utils/redirect';
import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { showMessage } from 'state/flash-messages/actions';
import { updateListingLocationEndpoint } from 'state/concepts/listings/endpoints';
import response from 'state/concepts/listings/__mocks__/fetchListingLocationResponse';

import updateListingLocation from '../updateListingLocation';

jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('updateListingLocation operation', () => {
  let dispatch;

  const action = {
    values: {
      country: 'country',
      state: 'state',
      city: 'city',
      street: 'street',
      zipCode: 'zipCode',
      apartmentNumber: 'apartmentNumber',
      latitude: 'latitude',
      longitude: 'longitude',
      listingId: 'listingId',
      redirectRoute: 'redirectRoute',
      message: 'message',
    },
    form: {},
  };

  const body = {
    country: action.values.country,
    state: action.values.state,
    city: action.values.city,
    street: action.values.street,
    zip_code: action.values.zipCode,
    apartment_number: action.values.apartmentNumber,
    latitude: action.values.latitude,
    longitude: action.values.longitude,
  };

  const { endpoint, url } = updateListingLocationEndpoint(action.values.listingId);

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    updateListingLocation.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(updateListingLocation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
          response: normalize(response.data),
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(3, showMessage(action.values.message));
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.values.redirectRoute);
    });
  });

  it('shouldn`t calls redirect when redirectRoute isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      values: {
        redirectRoute: null,
      },
    });

    redirect.mockClear();

    updateListingLocation.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(redirect).not.toHaveBeenCalled();
  });

  it('shouldn`t dispatches showMessage when message isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      values: {
        message: null,
      },
    });

    dispatch.mockClear();

    updateListingLocation.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(dispatch).not.toHaveBeenCalledWith(showMessage(action.values.message));
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
      expect(assignFormErrors).toHaveBeenCalledWith(action.form, error);
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
