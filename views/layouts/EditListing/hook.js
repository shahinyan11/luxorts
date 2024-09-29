import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import ROUTES from 'constants/routes';
import { LISTING_PATH_BY_STATUS, LISTING_STEP_STATUS } from 'constants/listing';
import { EDIT_LISTING_TABS } from 'constants/listing/edit';
import { LISTING_FILTERS } from 'constants/listing/manageListings';

import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingAbilityToEdit from 'utils/listing/checkListingAbilityToEdit';
import { createRoute } from 'utils/createRouteHelpers';

import useMount from 'hooks/useMount';

import {
  fetchListing,
  fetchListings,
  setListingsFilterParams,
  setListingsPage,
  setListingsSearchQuery,
} from 'state/concepts/listings/actions';
import {
  listingSelector,
  listingsSelector,
  listingsTotalSelector,
  paginationSelector,
} from 'state/concepts/listings/selectors';

function useContainer() {
  const router = useRouter();
  const dispatch = useDispatch();

  const listingId = router.query?.listingId;

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const listings = useSelector(listingsSelector);
  const total = useSelector(listingsTotalSelector);
  const pagination = useSelector(paginationSelector);

  // prepare data from listing
  const isListingPresent = isPresent(listing);
  const selectedListingTitle = listing?.title ||
    listing?.hiddenTitle || { id: 'shared.withoutTitle' };
  const selectedListingDescription = listing?.location || listing?.mainListingPhoto?.description;

  // compute active menu item
  const activeKey = EDIT_LISTING_TABS.find(
    (item) => item.PATH.replace('[id]', '[listingId]') === router.pathname,
  ).KEY;

  /**
   * On dropdown menu item click handler
   * @param id {string}
   * @param applicationStep {string}
   * @return {(function(): void)|*}
   */
  const onDropdownMenuItemClick = useCallback(
    ({ id, applicationStep }) =>
      () => {
        const isFinished = applicationStep === LISTING_STEP_STATUS.FINISHED;

        if (id === listingId) {
          return;
        }

        if (!isFinished) {
          router.push(
            createRoute({
              pathname: LISTING_PATH_BY_STATUS[applicationStep],
              id,
            }),
          );

          return;
        }

        router.push({ query: { listingId: id } });
      },
    [listingId, router],
  );

  /**
   * On tab menu item click handler
   * @param KEY {string}
   */
  const onTabClick = useCallback(
    (KEY) => {
      if (activeKey === KEY) {
        return;
      }

      router.push(
        createRoute({
          pathname: ROUTES.DASHBOARD.LISTINGS[KEY].PATH,
          id: listingId,
        }),
      );
    },
    [activeKey, listingId, router],
  );

  /**
   * Fetch data when scroll reach bottom
   */
  const onScrollNext = useCallback(() => {
    const nextPage = Math.round(listings.length / pagination.size + 1);

    dispatch(setListingsPage(nextPage));
    dispatch(fetchListings({ skipLoading: true, skipClearing: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings.length, pagination.size]);

  /**
   * On component mount handler
   */
  const onMountHandler = () => {
    dispatch(fetchListing(listingId));
    dispatch(setListingsPage(1));
    dispatch(setListingsFilterParams(LISTING_FILTERS));
    dispatch(setListingsSearchQuery(null));
    dispatch(fetchListings({ skipClearing: true }));
  };

  /**
   * Lifecycle
   */
  useMount(onMountHandler);

  return {
    listingId,
    listing,
    listings,
    activeKey,
    total,
    isListingPresent,
    selectedListingTitle,
    selectedListingDescription,
    onTabClick,
    onDropdownMenuItemClick,
    onScrollNext,
    onMountHandler,
  };
}

export const getInitialProps = async (ctx) => {
  const listingId = ctx.query?.listingId;
  const isServer = Boolean(ctx.req);
  const isUserVerified = checkUserVerification(ctx);

  if (isUserVerified && isServer) {
    ctx.store.dispatch(fetchListing(listingId));

    await ctx.store.logicMiddleware.whenComplete(() => {
      checkListingAbilityToEdit(ctx);
    });
  }
};

export default useContainer;
