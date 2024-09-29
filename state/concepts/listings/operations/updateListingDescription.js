import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import isPresent from 'utils/isPresent';
import redirect from 'utils/redirect';

import { UPDATE_LISTING_DESCRIPTION } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateListingDescriptionEndpoint } from 'state/concepts/listings/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const updateListingDescription = createLogic({
  type: UPDATE_LISTING_DESCRIPTION,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingDescriptionEndpoint(values.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        title: values.title,
        hidden_title: values.hiddenTitle,
        description: values.description,
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

export default updateListingDescription;
