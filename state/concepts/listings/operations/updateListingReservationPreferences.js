import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import isPresent from 'utils/isPresent';
import redirect from 'utils/redirect';

import { UPDATE_LISTING_RESERVATION_PREFERENCES } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateListingReservationPreferencesEndpoint } from 'state/concepts/listings/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const updateListingReservationPreferences = createLogic({
  type: UPDATE_LISTING_RESERVATION_PREFERENCES,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingReservationPreferencesEndpoint(values.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        prior_notified: values.priorNotified,
        prior_notified_time: values.priorNotifiedTime,
        checkin_start: values.checkinStart,
        checkin_end: values.checkinEnd,
        in_advance_booking: values.inAdvanceBooking,
        min_nights: values.minNights,
        max_nights: values.maxNights,
        preparation_time: values.preparationTime,
        approval_policy: values.approvalPolicy,
        cancellation_policy: values.cancellationPolicy,
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));

      if (isPresent(values.message)) {
        dispatch(showMessage(values.message));
      }

      if (isPresent(values.redirectRoute)) {
        redirect(values.redirectRoute);
      }
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      assignFormErrors(form, error);
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default updateListingReservationPreferences;
