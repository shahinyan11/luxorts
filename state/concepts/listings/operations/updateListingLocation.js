import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import isPresent from 'utils/isPresent';
import redirect from 'utils/redirect';

import { UPDATE_LISTING_LOCATION } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { showMessage } from 'state/flash-messages/actions';
import { updateListingLocationEndpoint } from 'state/concepts/listings/endpoints';

const updateListingLocation = createLogic({
  type: UPDATE_LISTING_LOCATION,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingLocationEndpoint(values.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        country: values.country,
        state: values.state,
        city: values.city || values.state,
        street: values.street,
        zip_code: values.zipCode,
        apartment_number: values.apartmentNumber,
        latitude: values.latitude,
        longitude: values.longitude,
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));

      if (isPresent(values.redirectRoute)) {
        redirect(values.redirectRoute);
      }

      if (values.message) {
        dispatch(showMessage(values.message));
      }
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      assignFormErrors(form, error);
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default updateListingLocation;
