import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';

import useParametricSelector from 'hooks/useParametricSelector';
import useCalendar from 'hooks/calendar/useCalendar';

import {
  fetchListing,
  fetchListingPricing,
  fetchListingTimePeriods,
} from 'state/concepts/listings/actions';
import { dataDeleteEntity } from 'state/data/actions';
import {
  listingCustomPriceSelector,
  listingSelector,
  listingTimePeriodsSelector,
} from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  fetchListingPricingEndpoint,
  fetchListingTimePeriodsEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';

function useContainer() {
  const router = useRouter();

  const listingId = router.query?.listingId;

  const { onNavigate, currentDate } = useCalendar({ listingId });

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingTimePeriodsEndpoint(listingId);
  const { endpoint: fetchPricingEndpoint } = fetchListingPricingEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const events = useSelector(listingTimePeriodsSelector);
  const customPrice = useSelector(listingCustomPriceSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isPricingFetching = useParametricSelector(loadingSelectorCreator, fetchPricingEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || isPricingFetching || !isPresent(listing);

  // prepare data from listing
  const pricePerDay = listing?.listingPricing?.pricePerDay;

  return {
    showSkeleton,
    isLoading,
    events,
    pricePerDay,
    customPrice,
    currentDate,
    onNavigate,
  };
}

export const getInitialProps = async (ctx) => {
  const listingId = ctx.query?.listingId;
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  ctx.store.dispatch(dataDeleteEntity('listingTimePeriod'));

  if (isPresent(listingId)) {
    ctx.store.dispatch(fetchListing(listingId));
    ctx.store.dispatch(fetchListingTimePeriods({ listingId }));
    ctx.store.dispatch(fetchListingPricing(listingId));
  }
};

export default useContainer;
