import isPresent from 'utils/isPresent';
import getFullAddress from 'utils/users/getFullAddress';

import { listingSelector } from 'state/concepts/listings/selectors';
import { fetchGeocoder } from 'state/concepts/googleMaps/actions';

const checkListingLocation = (ctx) => {
  const listingId = ctx.query?.listingId;
  const listing = listingSelector(ctx.store.getState(), listingId);
  const location = listing?.listingLocation;

  if (isPresent(location) && !isPresent(location.longitude) && !isPresent(location.latitude)) {
    const query = getFullAddress(location);

    ctx.store.dispatch(fetchGeocoder({ query }));
  }
};

export default checkListingLocation;
