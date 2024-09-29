import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import { LISTING_STATUS } from 'constants/listing';

import showErrorNotifications from 'utils/showErrorNotifications';

import { UPDATE_LISTING_STATUS } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateListingStatusEndpoint } from 'state/concepts/listings/endpoints';
import { hideModal, showModal } from 'state/modal/actions';
import { showMessage } from 'state/flash-messages/actions';
import { fetchListings } from 'state/concepts/listings/actions';

const updateListingStatus = createLogic({
  type: UPDATE_LISTING_STATUS,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingStatusEndpoint(action.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        status: action.status,
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));

      if (action.modal) {
        dispatch(showModal(action.modal));
      }

      if (action.message) {
        dispatch(showMessage(action.message));
      }

      if (action.hideModal && !action.modal) {
        dispatch(hideModal());
      }

      if (action.status === LISTING_STATUS.DELETED) {
        dispatch(fetchListings({ skipLoading: true }));
      }
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default updateListingStatus;
