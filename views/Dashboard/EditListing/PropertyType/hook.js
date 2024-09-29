import {
  fetchListing,
  fetchListingPropertyType,
  fetchListingsBasePropertyTypes,
} from 'state/concepts/listings/actions';

// eslint-disable-next-line import/prefer-default-export
export const getInitialProps = async (ctx) => {
  ctx.store.dispatch(fetchListingsBasePropertyTypes());
  ctx.store.dispatch(fetchListing(ctx.query.listingId));
  ctx.store.dispatch(fetchListingPropertyType(ctx.query.listingId));
};
