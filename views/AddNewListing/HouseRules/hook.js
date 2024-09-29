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
  fetchListingBaseHouseRules,
  fetchListingHouseRules,
  updateListingHouseRules,
} from 'state/concepts/listings/actions';
import { dataDeleteEntity } from 'state/data/actions';
import { listingHouseRulesSelector, listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingBaseHouseRulesEndpoint,
  fetchListingEndpoint,
  fetchListingHouseRulesEndpoint,
  updateListingHouseRulesEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/listing/houseRules';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingHouseRules);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: baseEndpoint } = fetchListingBaseHouseRulesEndpoint;
  const { endpoint: fetchEndpoint } = fetchListingHouseRulesEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingHouseRulesEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const houseRules = useSelector(listingHouseRulesSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isFetchingBaseHouseRules = useParametricSelector(loadingSelectorCreator, baseEndpoint);
  const isFetchingHouseRules = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton =
    isFetching || !isPresent(listing) || isFetchingBaseHouseRules || isFetchingHouseRules;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.DESCRIPTION.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      houseRules,
      listingId,
      additional: {
        name: '',
      },
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Is add additional house rule button disabled?
   * @type {boolean}
   */
  const isAddButtonDisabled = useMemo(() => {
    const { additional } = formik.values;

    return !isPresent(additional.name);
  }, [formik.values]);

  /**
   * House rules approved by admin
   * @type {object}
   */
  const approvedHouseRules = useMemo(
    () => propOr({}, APPROVED, formik.values.houseRules),
    [formik.values.houseRules],
  );

  /**
   * House rules not approved by admin
   * @type {array}
   */
  const notApprovedHouseRules = useMemo(
    () =>
      compose(filter(prop('checked')), values, propOr({}, NOT_APPROVED))(formik.values.houseRules),
    [formik.values.houseRules],
  );

  /**
   * Submit handler
   * @returns {Promise<void>}
   */
  const handleSubmit = useImmutableCallback(async () => {
    await formik.setFieldValue(
      'redirectRoute',
      createRoute({
        pathname: ROUTES.ADD_NEW_LISTING.RESERVATION_PREFERENCES.PATH,
        id: listingId,
      }),
    );

    formik.handleSubmit();
  });

  /**
   * Add not approved house rule handler
   * @returns {Promise<void>}
   */
  const handleAddNotApprovedHouseRule = useCallback(async () => {
    await formik.setValues({
      ...formik.values,
      redirectRoute: null,
      message: {
        description: {
          id: 'listing.houseRules.additional.success',
        },
      },
    });

    formik.handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  /**
   * Remove not approved house rule handler creator
   * @param id {string}
   * @returns {(function(): void)|*}
   */
  const handleRemoveNotApprovedHouseRuleCreator = useImmutableCallback((id) => () => {
    formik.setFieldValue(`houseRules.${NOT_APPROVED}.${id}.checked`, false);
  });

  return {
    formik,
    isLoading,
    showSkeleton,
    stepStatus,
    isAddButtonDisabled,
    approvedHouseRules,
    notApprovedHouseRules,
    onBackRoute,
    handleSubmit,
    handleAddNotApprovedHouseRule,
    handleRemoveNotApprovedHouseRuleCreator,
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

  ctx.store.dispatch(dataDeleteEntity('houseRule'));
  ctx.store.dispatch(dataDeleteEntity('listingHouseRule'));
  ctx.store.dispatch(fetchListingBaseHouseRules());

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
    ctx.store.dispatch(fetchListingHouseRules(listingId));
  }
};

export default useContainer;
