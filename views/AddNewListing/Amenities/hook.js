import { useCallback, useMemo } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { compose, filter, omit, prop, propOr, values } from 'ramda';

import ROUTES from 'constants/routes';
import { NOT_APPROVED } from 'constants';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';
import useFormSubmit from 'hooks/useFormSubmit';

import {
  fetchListing,
  fetchListingAmenities,
  fetchListingBaseAmenities,
  updateListingAmenities,
} from 'state/concepts/listings/actions';
import { listingAmenitiesSelector, listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingAmenitiesEndpoint,
  fetchListingBaseAmenitiesEndpoint,
  fetchListingEndpoint,
  updateListingAmenitiesEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { dataDeleteEntity } from 'state/data/actions';
import validationSchema from 'lib/yupLocalised/scheme/additionalItem';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingAmenities);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: baseEndpoint } = fetchListingBaseAmenitiesEndpoint;
  const { endpoint: fetchEndpoint } = fetchListingAmenitiesEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingAmenitiesEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const amenities = useSelector(listingAmenitiesSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isFetchingBaseAmenities = useParametricSelector(loadingSelectorCreator, baseEndpoint);
  const isFetchingAmenities = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton =
    isFetching || !isPresent(listing) || isFetchingBaseAmenities || isFetchingAmenities;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.LOCATION_MAP.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      amenities,
      listingId,
      additional: {
        name: '',
        description: '',
      },
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Is add additional amenity button disabled?
   * @type {boolean}
   */
  const isAddButtonDisabled = useMemo(() => {
    const { additional } = formik.values;

    return !isPresent(additional.name) || !isPresent(additional.description);
  }, [formik.values]);

  /**
   * Amenities approved by admin
   * @type {object}
   */
  const approvedAmenities = useMemo(
    () => omit([NOT_APPROVED], formik.values.amenities),
    [formik.values.amenities],
  );

  /**
   * Amenities not approved by admin
   * @type {array}
   */
  const notApprovedAmenities = useMemo(
    () =>
      compose(filter(prop('checked')), values, propOr({}, NOT_APPROVED))(formik.values.amenities),
    [formik.values.amenities],
  );

  /**
   * Submit handler
   * @returns {Promise<void>}
   */
  const handleSubmit = useImmutableCallback(async () => {
    await formik.setFieldValue(
      'redirectRoute',
      createRoute({
        pathname: ROUTES.ADD_NEW_LISTING.CAPABILITIES.PATH,
        id: listingId,
      }),
    );

    formik.handleSubmit();
  });

  /**
   * Add not approved amenity handler
   * @returns {Promise<void>}
   */
  const handleAddNotApprovedAmenity = useCallback(async () => {
    await formik.setValues({
      ...formik.values,
      redirectRoute: null,
      message: {
        description: {
          id: 'addNewListing.amenities.additionalAmenity.success',
        },
      },
    });

    formik.handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  /**
   * Remove not approved amenity handler creator
   * @param id {string}
   * @returns {(function(): void)|*}
   */
  const handleRemoveNotApprovedAmenityCreator = useImmutableCallback((id) => () => {
    formik.setFieldValue(`amenities.${NOT_APPROVED}.${id}.checked`, false);
  });

  return {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    isAddButtonDisabled,
    approvedAmenities,
    notApprovedAmenities,
    onBackRoute,
    handleSubmit,
    handleAddNotApprovedAmenity,
    handleRemoveNotApprovedAmenityCreator,
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

  ctx.store.dispatch(dataDeleteEntity('amenity'));
  ctx.store.dispatch(dataDeleteEntity('listingAmenity'));
  ctx.store.dispatch(fetchListingBaseAmenities());

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
    ctx.store.dispatch(fetchListingAmenities(listingId));
  }
};

export default useContainer;
