import { LISTING_PATH_BY_STATUS } from 'constants/listing';

import redirect from 'utils/redirect';
import { createRoute } from 'utils/createRouteHelpers';

import mockedListing from 'views/__mocks__/mockedListing';

import checkListingCompleteness from '../checkListingCompleteness';

jest.mock('utils/redirect');
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
}));

describe('checkListingCompleteness util', () => {
  const ctx = {
    store: {
      getState: jest.fn(),
    },
    query: {
      listingId: 'listingId',
    },
  };

  const redirectRoute = createRoute({
    pathname: LISTING_PATH_BY_STATUS[mockedListing.applicationStep],
    id: ctx.query.listingId,
  });

  it('should calls redirect when asPath does not equals computed destination', () => {
    checkListingCompleteness(ctx);

    expect(redirect).toHaveBeenCalledWith(redirectRoute, ctx);
  });

  it('shouldn`t calls redirect when asPath equals computed destination', () => {
    redirect.mockClear();

    checkListingCompleteness({
      ...ctx,
      asPath: redirectRoute,
    });

    expect(redirect).not.toHaveBeenCalled();
  });
});
