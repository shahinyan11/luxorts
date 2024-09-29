import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import isPresent from 'utils/isPresent';
import makeAccommodationItem from 'utils/listing/makeAccommodationItem';
import redirect from 'utils/redirect';

import { UPDATE_LISTING_ACCOMODATION } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateListingAccomodationEndpoint } from 'state/concepts/listings/endpoints';

export const kindIsPresent = (item) => isPresent(item.kind);

const updateListingAccomodation = createLogic({
  type: UPDATE_LISTING_ACCOMODATION,
  latest: true,

  async process({ action: { values, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingAccomodationEndpoint(values.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const bedrooms = values.bedrooms.map((bedroom) => {
        const customBeds = bedroom.customBeds.filter(kindIsPresent).map(makeAccommodationItem);

        return {
          ...(isPresent(bedroom.id) && { id: bedroom.id }),
          default_beds: bedroom.defaultBeds.map(makeAccommodationItem),
          custom_beds: [...bedroom.bedsForDeleting, ...customBeds],
        };
      });

      const bathrooms = values.bathrooms.map((bathroom) => {
        const customBaths = bathroom.customBaths.filter(kindIsPresent).map(makeAccommodationItem);

        return {
          ...(isPresent(bathroom.id) && { id: bathroom.id }),
          default_baths: bathroom.defaultBaths.map(makeAccommodationItem),
          custom_baths: [...bathroom.bathsForDeleting, ...customBaths],
        };
      });

      const body = {
        guests_number: values.guestsNumber,
        beds_amount: values.bedsAmount,
        listing_bedrooms: [...values.bedroomsForDeleting, ...bedrooms],
        listing_bathrooms: [...values.bathroomsForDeleting, ...bathrooms],
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));

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

export default updateListingAccomodation;
