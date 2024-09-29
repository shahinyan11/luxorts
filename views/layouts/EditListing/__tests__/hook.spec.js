import { renderHook } from '@testing-library/react-hooks';

import ROUTES from 'constants/routes';
import { EDIT_LISTING_TABS } from 'constants/listing/edit';
import { LISTING_PATH_BY_STATUS, LISTING_STEP_STATUS } from 'constants/listing';
import { LISTING_FILTERS } from 'constants/listing/manageListings';

import { createRoute } from 'utils/createRouteHelpers';
import checkUserVerification from 'utils/auth/checkUserVerification';

import mockedListing from 'views/__mocks__/mockedListing';
import mockedListings from 'views/__mocks__/mockedListings';
import mockedPagination from 'views/__mocks__/mockedPagination';
import { dispatch, store } from '__mocks__/react-redux';

import {
  fetchListing,
  fetchListings,
  setListingsFilterParams,
  setListingsPage,
  setListingsSearchQuery,
} from 'state/concepts/listings/actions';

import useContainer, { getInitialProps } from '../hook';

const mockedListingId = 'listingId';
const mockedRouter = {
  query: { listingId: mockedListingId },
  pathname: EDIT_LISTING_TABS[0].PATH.replace('[id]', '[listingId]'),
  push: jest.fn(),
};
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => mockedRouter),
}));

jest.mock('utils/listing/checkListingAbilityToEdit');
jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));

jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
  listingsSelector: jest.fn(() => mockedListings),
  listingsTotalSelector: jest.fn(() => 1),
  paginationSelector: jest.fn(() => mockedPagination),
}));

describe('EditListingLayout useContainer hook', () => {
  const { result } = renderHook(useContainer);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onDropdownMenuItemClick method', () => {
    it('shouldn`t calls router.push when id equals router.query.listingId', () => {
      result.current.onDropdownMenuItemClick({
        id: mockedListingId,
        applicationStep: mockedListing.applicationStep,
      })();

      expect(mockedRouter.push).not.toHaveBeenCalled();
    });

    describe('should calls router.push', () => {
      it(`when id does not equal router.query.listingId and applicationStep does not equal ${LISTING_STEP_STATUS.FINISHED}`, () => {
        result.current.onDropdownMenuItemClick(mockedListing)();

        expect(mockedRouter.push).toHaveBeenCalledWith(
          createRoute({
            pathname: LISTING_PATH_BY_STATUS[mockedListing.applicationStep],
            id: mockedListing.id,
          }),
        );
      });

      it(`when id does not equal router.query.listingId and applicationStep equals ${LISTING_STEP_STATUS.FINISHED}`, () => {
        result.current.onDropdownMenuItemClick({
          id: mockedListing.id,
          applicationStep: LISTING_STEP_STATUS.FINISHED,
        })();

        expect(mockedRouter.push).toHaveBeenCalledWith({ query: { listingId: mockedListing.id } });
      });
    });
  });

  it('onScrollNext method dispatches setListingsPage and fetchListings actions', () => {
    result.current.onScrollNext();

    const nextPage = Math.round(mockedListings.length / mockedPagination.size + 1);

    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(dispatch).toHaveBeenNthCalledWith(1, setListingsPage(nextPage));
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      fetchListings({ skipLoading: true, skipClearing: true }),
    );
  });

  it('onMountHandler method dispatches fetchListing, setListingsPage, setListingsFilterParams, setListingsSearchQuery and fetchListings actions', () => {
    result.current.onMountHandler();

    expect(dispatch).toHaveBeenCalledTimes(5);

    expect(dispatch).toHaveBeenNthCalledWith(1, fetchListing(mockedListingId));
    expect(dispatch).toHaveBeenNthCalledWith(2, setListingsPage(1));
    expect(dispatch).toHaveBeenNthCalledWith(3, setListingsFilterParams(LISTING_FILTERS));
    expect(dispatch).toHaveBeenNthCalledWith(4, setListingsSearchQuery(null));
    expect(dispatch).toHaveBeenNthCalledWith(5, fetchListings({ skipClearing: true }));
  });

  describe('onTabClick method', () => {
    it('should calls router.push when activeTabKey does not equal key', () => {
      const key = EDIT_LISTING_TABS[1].KEY;
      result.current.onTabClick(key);

      expect(mockedRouter.push).toHaveBeenCalledWith(
        createRoute({
          pathname: ROUTES.DASHBOARD.LISTINGS[key].PATH,
          id: mockedListingId,
        }),
      );
    });

    it('shouldn`t calls router.push when activeTabKey equals key', () => {
      result.current.onTabClick(EDIT_LISTING_TABS[0].KEY);

      expect(mockedRouter.push).not.toHaveBeenCalled();
    });
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
      query: {
        listingId: mockedListingId,
      },
      req: {},
    };

    it('should dispatches when user is verified and is server', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledWith(fetchListing(mockedListingId));
    });

    it('shouldn`t dispatches when user isn`t verified', async () => {
      checkUserVerification.mockReturnValueOnce(false);

      await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('shouldn`t dispatches when isn`t server', async () => {
      await getInitialProps({
        ...ctx,
        req: null,
      });

      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });
});
