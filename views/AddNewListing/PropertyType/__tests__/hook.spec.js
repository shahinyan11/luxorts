import checkUserVerification from 'utils/auth/checkUserVerification';

import {
  fetchListing,
  fetchListingPropertyType,
  fetchListingsBasePropertyTypes,
} from 'state/concepts/listings/actions';

import { store } from '__mocks__/react-redux';

import { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));

describe('PropertyType getInitialProps method', () => {
  const ctx = {
    store,
    query: {
      listingId: 'listingId',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatches all actions', async () => {
    await getInitialProps(ctx);

    expect(store.dispatch).toHaveBeenCalledTimes(3);

    expect(store.dispatch).toHaveBeenNthCalledWith(1, fetchListingsBasePropertyTypes());
    expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListing(ctx.query.listingId));
    expect(store.dispatch).toHaveBeenNthCalledWith(
      3,
      fetchListingPropertyType(ctx.query.listingId),
    );
  });

  it('should dispatches only fetchListingsBasePropertyTypes action when listingId isn`t present', async () => {
    await getInitialProps({
      ...ctx,
      query: {},
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);

    expect(store.dispatch).toHaveBeenNthCalledWith(1, fetchListingsBasePropertyTypes());
  });

  it('shouldn`t dispatches any actions when user is unverified', async () => {
    checkUserVerification.mockReturnValueOnce(false);

    await getInitialProps(ctx);

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
