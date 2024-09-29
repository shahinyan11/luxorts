import {
  fetchListing,
  fetchListingPropertyType,
  fetchListingsBasePropertyTypes,
} from 'state/concepts/listings/actions';

import { store } from '__mocks__/react-redux';

import { getInitialProps } from '../hook';

describe('PropertyType getInitialProps method', () => {
  it('dispatches actions', () => {
    const ctx = {
      store,
      query: {
        listingId: 'listingId',
      },
    };

    getInitialProps(ctx);

    expect(store.dispatch).toHaveBeenCalledTimes(3);

    expect(store.dispatch).toHaveBeenNthCalledWith(1, fetchListingsBasePropertyTypes());
    expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListing(ctx.query.listingId));
    expect(store.dispatch).toHaveBeenNthCalledWith(
      3,
      fetchListingPropertyType(ctx.query.listingId),
    );
  });
});
