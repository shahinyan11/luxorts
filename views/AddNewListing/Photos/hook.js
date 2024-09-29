import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import ROUTES from 'constants/routes';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';

import {
  fetchListing,
  fetchListingPhotos,
  updateListingPhotos,
} from 'state/concepts/listings/actions';
import { listingPhotosSelector, listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  fetchListingPhotosEndpoint,
  updateListingPhotosEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { dataDeleteEntity } from 'state/data/actions';
import validationSchema from 'lib/yupLocalised/scheme/listing/photos';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingPhotos);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingPhotosEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingPhotosEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const listingPhotos = useSelector(listingPhotosSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isFetchingPhotos = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || !isPresent(listing) || isFetchingPhotos;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.SERVICES.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: false,
    initialValues: {
      listingPhotos,
      listingId,
      photosForDeleting: [],
      redirectRoute: createRoute({
        pathname: ROUTES.ADD_NEW_LISTING.DESCRIPTION.PATH,
        id: listingId,
      }),
    },
    validationSchema,
    onSubmit,
  });

  /**
   * On remove photo callback
   * @param photo {object}
   * @type {(function(*): void)|*}
   */
  const onRemovePhotoCallback = useCallback(
    (photo) => {
      if (!isPresent(photo.file)) {
        const { photosForDeleting } = formik.values;

        formik.setFieldValue('photosForDeleting', [
          ...photosForDeleting,
          { ...photo, delete: true },
        ]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formik.values.photosForDeleting],
  );

  /**
   * Handle update formik listingPhotos value
   */
  const handleUpdateFormikListingPhotos = () => {
    if (!isLoading) {
      formik.resetForm({
        values: {
          ...formik.values,
          listingPhotos,
        },
      });
    }
  };

  /**
   * Lifecycle
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleUpdateFormikListingPhotos, [listingPhotos, isLoading]);

  return {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    onBackRoute,
    onRemovePhotoCallback,
    handleUpdateFormikListingPhotos,
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

  ctx.store.dispatch(dataDeleteEntity('listingPhoto'));

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
    ctx.store.dispatch(fetchListingPhotos(listingId));
  }
};

export default useContainer;
