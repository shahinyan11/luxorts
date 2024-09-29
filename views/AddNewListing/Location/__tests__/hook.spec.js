import checkUserVerification from 'utils/auth/checkUserVerification';

import { fetchListing, fetchListingLocation } from 'state/concepts/listings/actions';
import { store } from '__mocks__/react-redux';

import { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('utils/listing/checkListingCompleteness');

describe('Location useContainer hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
      query: {
        listingId: 'listingId',
      },
      req: {},
    };

    it('should dispatches all actions when user is verified and listingId is present', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledTimes(2);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, fetchListing(ctx.query.listingId));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListingLocation(ctx.query.listingId));
    });

    it('shouldn`t dispatches any action when user is verified and listingId isn`t present', async () => {
      await getInitialProps({
        ...ctx,
        query: {},
      });

      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('shouldn`t dispatches any actions when user isn`t verified', async () => {
      checkUserVerification.mockReturnValueOnce(false);

      await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('should calls whenComplete callback when is server', async () => {
      await getInitialProps(ctx);

      expect(store.logicMiddleware.whenComplete).toHaveBeenCalled();
    });

    it('shouldn`t calls whenComplete callback when isn`t server', async () => {
      await getInitialProps({
        ...ctx,
        req: null,
      });

      expect(store.logicMiddleware.whenComplete).not.toHaveBeenCalled();
    });
  });
});
