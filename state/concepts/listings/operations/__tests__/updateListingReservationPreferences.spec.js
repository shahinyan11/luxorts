import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';
import redirect from 'utils/redirect';
import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { updateListingReservationPreferencesEndpoint } from 'state/concepts/listings/endpoints';
import { showMessage } from 'state/flash-messages/actions';
import response from 'state/concepts/listings/__mocks__/fetchListingReservationPreferencesResponse';

import updateListingReservationPreferences from '../updateListingReservationPreferences';

jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('updateListingReservationPreferences operation', () => {
  let dispatch;

  const action = {
    values: {
      priorNotified: 'priorNotified',
      priorNotifiedTime: 'priorNotifiedTime',
      checkinStart: 'checkinStart',
      checkinEnd: 'checkinEnd',
      inAdvanceBooking: 'inAdvanceBooking',
      minNights: 'minNights',
      maxNights: 'maxNights',
      preparationTime: 'preparationTime',
      approvalPolicy: 'approvalPolicy',
      cancellationPolicy: 'cancellationPolicy',
      listingId: 'listingId',
      redirectRoute: 'redirectRoute',
      message: 'message',
    },
    form: {},
  };

  const body = {
    prior_notified: action.values.priorNotified,
    prior_notified_time: action.values.priorNotifiedTime,
    checkin_start: action.values.checkinStart,
    checkin_end: action.values.checkinEnd,
    in_advance_booking: action.values.inAdvanceBooking,
    min_nights: action.values.minNights,
    max_nights: action.values.maxNights,
    preparation_time: action.values.preparationTime,
    approval_policy: action.values.approvalPolicy,
    cancellation_policy: action.values.cancellationPolicy,
  };

  const { endpoint, url } = updateListingReservationPreferencesEndpoint(action.values.listingId);

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    updateListingReservationPreferences.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(updateListingReservationPreferences).toMatchSnapshot();
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

  it('shouldn`t dispatches showMessage when message isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      values: {
        message: null,
      },
    });

    dispatch.mockClear();

    updateListingReservationPreferences.process(
      { httpClient, action: newAction },
      dispatch,
      jest.fn(),
    );

    expect(dispatch).not.toHaveBeenCalledWith(showMessage(action.values.message));
  });

  it('shouldn`t calls redirect when redirectRoute isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      values: {
        redirectRoute: null,
      },
    });

    redirect.mockClear();

    updateListingReservationPreferences.process(
      { httpClient, action: newAction },
      dispatch,
      jest.fn(),
    );

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
      expect(assignFormErrors).toHaveBeenCalledWith(action.form, error);
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
