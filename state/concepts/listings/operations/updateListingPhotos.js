import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import { pluck } from 'ramda';

import { FORM_DATA_CONFIG } from 'constants';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import isPresent from 'utils/isPresent';
import redirect from 'utils/redirect';

import { UPDATE_LISTING_PHOTOS } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess, dataDelete } from 'state/data/actions';
import { updateListingPhotosEndpoint } from 'state/concepts/listings/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const updateListingPhotos = createLogic({
  type: UPDATE_LISTING_PHOTOS,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingPhotosEndpoint(values.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const formData = new FormData();

      [...values.listingPhotos, ...values.photosForDeleting].forEach((photo) => {
        formData.append('listing_photos[][id]', photo.id); // should be first

        if (isPresent(photo.file)) {
          formData.append('listing_photos[][photo]', photo.file);
        }

        formData.append('listing_photos[][position]', photo.position);
        formData.append('listing_photos[][description]', photo.description);
        formData.append('listing_photos[][delete]', photo.delete);
      });

      const { data } = await httpClient.put(url, formData, FORM_DATA_CONFIG);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));

      // clear data reducer
      const ids = pluck('id', values.photosForDeleting);
      dispatch(dataDelete({ kind: 'listingPhoto', ids }));

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

export default updateListingPhotos;
