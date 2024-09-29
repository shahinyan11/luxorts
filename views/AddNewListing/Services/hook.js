import { useCallback, useMemo } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { compose, filter, prop, propOr, values } from 'ramda';

import { APPROVED, NOT_APPROVED } from 'constants';
import ROUTES from 'constants/routes';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';
import useFormSubmit from 'hooks/useFormSubmit';

import {
  fetchListing,
  fetchListingBaseServices,
  fetchListingServices,
  updateListingServices,
} from 'state/concepts/listings/actions';
import { listingServicesSelector, listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingServicesEndpoint,
  fetchListingBaseServicesEndpoint,
  fetchListingEndpoint,
  updateListingServicesEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { dataDeleteEntity } from 'state/data/actions';
import validationSchema from 'lib/yupLocalised/scheme/additionalItem';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingServices);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: baseEndpoint } = fetchListingBaseServicesEndpoint;
  const { endpoint: fetchEndpoint } = fetchListingServicesEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingServicesEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const listingServices = useSelector(listingServicesSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isFetchingBaseServices = useParametricSelector(loadingSelectorCreator, baseEndpoint);
  const isFetchingServices = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton =
    isFetching || !isPresent(listing) || isFetchingBaseServices || isFetchingServices;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.CAPABILITIES.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      listingServices,
      listingId,
      additional: {
        name: '',
        description: '',
        paid: false,
      },
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Is add additional service button disabled?
   * @type {boolean}
   */
  const isAddButtonDisabled = useMemo(() => {
    const { additional } = formik.values;

    return !isPresent(additional.name) || !isPresent(additional.description);
  }, [formik.values]);

  /**
   * Services approved by admin
   * @type {object}
   */
  const approvedServices = useMemo(
    () => propOr({}, APPROVED, formik.values.listingServices),
    [formik.values.listingServices],
  );

  /**
   * Services not approved by admin
   * @type {array}
   */
  const notApprovedServices = useMemo(
    () =>
      compose(
        filter(prop('checked')),
        values,
        propOr({}, NOT_APPROVED),
      )(formik.values.listingServices),
    [formik.values.listingServices],
  );

  /**
   * Submit handler
   * @returns {Promise<void>}
   */
  const handleSubmit = useImmutableCallback(async () => {
    await formik.setFieldValue(
      'redirectRoute',
      createRoute({
        pathname: ROUTES.ADD_NEW_LISTING.PHOTOS.PATH,
        id: listingId,
      }),
    );

    formik.handleSubmit();
  });

  /**
   * Add not approved service handler
   * @returns {Promise<void>}
   */
  const handleAddNotApprovedService = useCallback(async () => {
    await formik.setValues({
      ...formik.values,
      redirectRoute: null,
      message: {
        description: {
          id: 'addNewListing.services.additionalService.success',
        },
      },
    });

    formik.handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  /**
   * Remove not approved service handler creator
   * @param id {string}
   * @returns {(function(): void)|*}
   */
  const handleRemoveNotApprovedServiceCreator = useImmutableCallback((id) => () => {
    formik.setFieldValue(`listingServices.${NOT_APPROVED}.${id}.checked`, false);
  });

  return {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    isAddButtonDisabled,
    approvedServices,
    notApprovedServices,
    onBackRoute,
    handleSubmit,
    handleAddNotApprovedService,
    handleRemoveNotApprovedServiceCreator,
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

  ctx.store.dispatch(dataDeleteEntity('service'));
  ctx.store.dispatch(dataDeleteEntity('listingService'));
  ctx.store.dispatch(fetchListingBaseServices());

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
    ctx.store.dispatch(fetchListingServices(listingId));
  }
};

export default useContainer;
