import { LISTING_PATH_BY_STATUS, LISTING_STEP_STATUS } from 'constants/listing';

import redirect from 'utils/redirect';
import { createRoute } from 'utils/createRouteHelpers';

import mockedListing from 'views/__mocks__/mockedListing';
import { store } from '__mocks__/react-redux';

import { listingSelector } from 'state/concepts/listings/selectors';

import checkListingAbilityToEdit from '../checkListingAbilityToEdit';

jest.mock('utils/redirect');
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
}));

describe('checkListingAbilityToEdit util', () => {
  const ctx = {
    store,
    query: {
      listingId: 'listingId',
    },
  };

  const redirectRoute = createRoute({
    pathname: LISTING_PATH_BY_STATUS[mockedListing.applicationStep],
    id: ctx.query.listingId,
  });

  it(`should calls redirect when listing.applicationStep does not equal ${LISTING_STEP_STATUS.FINISHED}`, () => {
    checkListingAbilityToEdit(ctx);

    expect(redirect).toHaveBeenCalledWith(redirectRoute, ctx);
  });

  it(`shouldn't calls redirect when listing.applicationStep equals ${LISTING_STEP_STATUS.FINISHED}`, () => {
    listingSelector.mockReturnValueOnce({
      ...mockedListing,
      applicationStep: LISTING_STEP_STATUS.FINISHED,
    });

    redirect.mockClear();

    checkListingAbilityToEdit(ctx);

    expect(redirect).not.toHaveBeenCalled();
  });
});
