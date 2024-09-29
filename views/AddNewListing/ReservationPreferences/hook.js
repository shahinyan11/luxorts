import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import ROUTES from 'constants/routes';
import { LISTING_RESERVATION_PREFERENCES_VALIDATION } from 'constants/listing/reservationPreferences';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';

import {
  fetchListing,
  fetchListingReservationPreferences,
  updateListingReservationPreferences,
} from 'state/concepts/listings/actions';
import { listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  fetchListingReservationPreferencesEndpoint,
  updateListingReservationPreferencesEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/listing/reservationPreferences';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingReservationPreferences);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingReservationPreferencesEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingReservationPreferencesEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isFetchingPreferences = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || !isPresent(listing) || isFetchingPreferences;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const listingReservationPreference = listing?.listingReservationPreference;
  const initialValues = {
    priorNotified: listingReservationPreference?.priorNotified || '',
    priorNotifiedTime: listingReservationPreference?.priorNotifiedTime || null,
    checkinStart: listingReservationPreference?.checkinStart || null,
    checkinEnd: listingReservationPreference?.checkinEnd || null,
    inAdvanceBooking: listingReservationPreference?.inAdvanceBooking || null,
    minNights:
      listingReservationPreference?.minNights ||
      LISTING_RESERVATION_PREFERENCES_VALIDATION.GUESTS_STAY_TIME.MIN,
    maxNights:
      listingReservationPreference?.maxNights ||
      LISTING_RESERVATION_PREFERENCES_VALIDATION.GUESTS_STAY_TIME.MIN,
    preparationTime:
      listingReservationPreference?.preparationTime ||
      LISTING_RESERVATION_PREFERENCES_VALIDATION.PREPARATION_TIME,
    approvalPolicy: listingReservationPreference?.approvalPolicy || null,
    cancellationPolicy: listingReservationPreference?.cancellationPolicy || null,
    listingId,
    redirectRoute: createRoute({
      pathname: ROUTES.ADD_NEW_LISTING.AVAILABILITY.PATH,
      id: listingId,
    }),
  };
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.HOUSE_RULES.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    onBackRoute,
  };
}

export const getInitialProps = async (ctx) => {
  const listingId = ctx.query?.listingId;
  const isListingIdPresent = isPresent(listingId);
  const isServer = Boolean(ctx.req);
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  if (isListingIdPresent) {
    ctx.store.dispatch(fetchListing(listingId));
  }

  if (isServer) {
    await ctx.store.logicMiddleware.whenComplete(() => {
      checkListingCompleteness(ctx);
    });
  }

  // fetch after check listing completeness
  if (isListingIdPresent) {
    ctx.store.dispatch(fetchListingReservationPreferences(listingId));
  }
};

export default useContainer;
