import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import ROUTES from 'constants/routes';

import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';
import assignFormErrors from 'utils/form/assignFormErrors';
import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';

import { CREATE_UPDATE_LISTING } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import {
  createListingEndpoint,
  updateListingPropertyTypeEndpoint,
} from 'state/concepts/listings/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const createUpdateListing = createLogic({
  type: CREATE_UPDATE_LISTING,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const isUpdate = isPresent(values.listingId);

    const { endpoint, url } = isUpdate
      ? updateListingPropertyTypeEndpoint(values.listingId)
      : createListingEndpoint;

    const httpMethod = isUpdate ? httpClient.put : httpClient.post;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        listing_property_type: {
          property_type_id: values.listingPropertyType.propertyTypeId,
          type_of_place: values.listingPropertyType.typeOfPlace,
        },
      };

      const { data } = await httpMethod(url, body);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));

      if (values.shouldRedirect) {
        const redirectRoute =
          values.redirectRoute ||
          createRoute({
            pathname: ROUTES.ADD_NEW_LISTING.ACCOMMODATION.PATH,
            id: values.listingId || data.data.id,
          });

        redirect(redirectRoute);
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
export default createUpdateListing;
