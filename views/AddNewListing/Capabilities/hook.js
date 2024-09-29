import { useCallback, useMemo } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { compose, filter, prop, propOr, values } from 'ramda';

import ROUTES from 'constants/routes';
import { APPROVED, NOT_APPROVED } from 'constants';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';
import useFormSubmit from 'hooks/useFormSubmit';

import {
  fetchListing,
  fetchListingBaseCapabilities,
  fetchListingCapabilities,
  updateListingCapabilities,
} from 'state/concepts/listings/actions';
import { listingCapabilitiesSelector, listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingCapabilitiesEndpoint,
  fetchListingBaseCapabilitiesEndpoint,
  fetchListingEndpoint,
  updateListingCapabilitiesEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { dataDeleteEntity } from 'state/data/actions';
import validationSchema from 'lib/yupLocalised/scheme/additionalItem';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingCapabilities);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: baseEndpoint } = fetchListingBaseCapabilitiesEndpoint;
  const { endpoint: fetchEndpoint } = fetchListingCapabilitiesEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingCapabilitiesEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const capabilities = useSelector(listingCapabilitiesSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isFetchingBaseCapabilities = useParametricSelector(loadingSelectorCreator, baseEndpoint);
  const isFetchingCapabilities = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton =
    isFetching || !isPresent(listing) || isFetchingBaseCapabilities || isFetchingCapabilities;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.AMENITIES.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      capabilities,
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
   * Is add additional capability button disabled?
   * @type {boolean}
   */
  const isAddButtonDisabled = useMemo(() => {
    const { additional } = formik.values;

    return !isPresent(additional.name) || !isPresent(additional.description);
  }, [formik.values]);

  /**
   * Capabilities approved by admin
   * @type {object}
   */
  const approvedCapabilities = useMemo(
    () => propOr({}, APPROVED, formik.values.capabilities),
    [formik.values.capabilities],
  );

  /**
   * Capabilities not approved by admin
   * @type {array}
   */
  const notApprovedCapabilities = useMemo(
    () =>
      compose(
        filter(prop('checked')),
        values,
        propOr({}, NOT_APPROVED),
      )(formik.values.capabilities),
    [formik.values.capabilities],
  );

  /**
   * Submit handler
   * @returns {Promise<void>}
   */
  const handleSubmit = useImmutableCallback(async () => {
    await formik.setFieldValue(
      'redirectRoute',
      createRoute({
        pathname: ROUTES.ADD_NEW_LISTING.SERVICES.PATH,
        id: listingId,
      }),
    );

    formik.handleSubmit();
  });

  /**
   * Add not approved capability handler
   * @returns {Promise<void>}
   */
  const handleAddNotApprovedCapability = useCallback(async () => {
    await formik.setValues({
      ...formik.values,
      redirectRoute: null,
      message: {
        description: {
          id: 'addNewListing.capabilities.additionalCapability.success',
        },
      },
    });

    formik.handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  /**
   * Remove not approved capability handler creator
   * @param id {string}
   * @returns {(function(): void)|*}
   */
  const handleRemoveNotApprovedCapabilityCreator = useImmutableCallback((id) => () => {
    formik.setFieldValue(`capabilities.${NOT_APPROVED}.${id}.checked`, false);
  });

  return {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    isAddButtonDisabled,
    approvedCapabilities,
    notApprovedCapabilities,
    onBackRoute,
    handleSubmit,
    handleAddNotApprovedCapability,
    handleRemoveNotApprovedCapabilityCreator,
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

  ctx.store.dispatch(dataDeleteEntity('capability'));
  ctx.store.dispatch(dataDeleteEntity('listingCapability'));
  ctx.store.dispatch(fetchListingBaseCapabilities());

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
    ctx.store.dispatch(fetchListingCapabilities(listingId));
  }
};

export default useContainer;
