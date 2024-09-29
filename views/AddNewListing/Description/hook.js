import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import ROUTES from 'constants/routes';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';

import {
  fetchListing,
  fetchListingDescription,
  updateListingDescription,
} from 'state/concepts/listings/actions';
import { listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  fetchListingDescriptionEndpoint,
  updateListingDescriptionEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/listing/description';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingDescription);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingDescriptionEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingDescriptionEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isFetchingDescription = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || !isPresent(listing) || isFetchingDescription;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const initialValues = {
    title: listing?.listingDescription?.title || '',
    hiddenTitle: listing?.listingDescription?.hiddenTitle || '',
    description: listing?.listingDescription?.description || '',
    listingId,
    redirectRoute: createRoute({
      pathname: ROUTES.ADD_NEW_LISTING.HOUSE_RULES.PATH,
      id: listingId,
    }),
  };
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.PHOTOS.PATH,
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
    ctx.store.dispatch(fetchListingDescription(listingId));
  }
};

export default useContainer;
