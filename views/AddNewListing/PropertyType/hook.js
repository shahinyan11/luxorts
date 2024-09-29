import checkUserVerification from 'utils/auth/checkUserVerification';
import isPresent from 'utils/isPresent';

import {
  fetchListingsBasePropertyTypes,
  fetchListing,
  fetchListingPropertyType,
} from 'state/concepts/listings/actions';

// eslint-disable-next-line import/prefer-default-export
export const getInitialProps = async (ctx) => {
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  ctx.store.dispatch(fetchListingsBasePropertyTypes());

  if (isPresent(ctx.query.listingId)) {
    ctx.store.dispatch(fetchListing(ctx.query.listingId));
    ctx.store.dispatch(fetchListingPropertyType(ctx.query.listingId));
  }
};
