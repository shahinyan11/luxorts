import { fetchListing, fetchListingLocation } from 'state/concepts/listings/actions';
import { store } from '__mocks__/react-redux';

import { getInitialProps } from '../hook';

describe('Location getInitialProps method', () => {
  const ctx = {
    store,
    query: {
      listingId: 'listingId',
    },
  };

  it('dispatches actions', async () => {
    await getInitialProps(ctx);

    expect(store.dispatch).toHaveBeenCalledTimes(2);

    expect(store.dispatch).toHaveBeenNthCalledWith(1, fetchListing(ctx.query.listingId));
    expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListingLocation(ctx.query.listingId));
  });
});
