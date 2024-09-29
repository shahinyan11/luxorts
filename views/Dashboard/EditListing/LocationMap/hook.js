import { fetchListing, fetchListingLocation } from 'state/concepts/listings/actions';

// eslint-disable-next-line import/prefer-default-export
export const getInitialProps = async (ctx) => {
  const listingId = ctx.query?.listingId;

  ctx.store.dispatch(fetchListing(listingId));
  ctx.store.dispatch(fetchListingLocation(listingId));
};
