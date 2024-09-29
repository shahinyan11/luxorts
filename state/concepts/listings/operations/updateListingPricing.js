import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import isPresent from 'utils/isPresent';
import redirect from 'utils/redirect';

import { UPDATE_LISTING_PRICING } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateListingPricingEndpoint } from 'state/concepts/listings/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const updateListingPricing = createLogic({
  type: UPDATE_LISTING_PRICING,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingPricingEndpoint(values.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        price_per_day: values.pricePerDay,
        extra_charges: values.extraCharges,
        weekly_discount: values.weeklyDiscount,
        mounthly_discount: values.mounthlyDiscount,
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

export default updateListingPricing;
