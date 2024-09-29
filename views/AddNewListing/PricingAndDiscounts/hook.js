import { useMemo } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { DAYS_IN } from 'constants';
import ROUTES from 'constants/routes';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';

import {
  fetchListing,
  fetchListingPricing,
  updateListingPricing,
} from 'state/concepts/listings/actions';
import { listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  fetchListingPricingEndpoint,
  updateListingPricingEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/listing/pricingAndDiscounts';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingPricing);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingPricingEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingPricingEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isFetchingPricing = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || !isPresent(listing) || isFetchingPricing;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const listingPricing = listing?.listingPricing;
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.AVAILABILITY.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      pricePerDay: listingPricing?.pricePerDay || null,
      weeklyDiscount: listingPricing?.weeklyDiscount || null,
      mounthlyDiscount: listingPricing?.mounthlyDiscount || null,
      extraCharges: listingPricing?.extraCharges || null,
      redirectRoute: createRoute({
        pathname: ROUTES.ADD_NEW_LISTING.PUBLISH.PATH,
        id: listingId,
      }),
      listingId,
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Weekly discount tooltip
   * @type {object}
   */
  const weeklyDiscountTooltip = useMemo(() => {
    const { weeklyDiscount, pricePerDay } = formik.values;

    if (!isPresent(weeklyDiscount) || !isPresent(pricePerDay)) {
      return { id: 'listing.pricingAndDiscounts.weeklyDiscount.tooltip' };
    }

    const weekCost = pricePerDay * DAYS_IN.WEEK;
    const discount = (weekCost / 100) * Number(weeklyDiscount);

    return {
      id: 'shared.weeklyPriceTooltip',
      values: {
        percents: `${weeklyDiscount}%`,
        discount: `$${discount.toFixed(1)}`,
      },
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.pricePerDay, formik.values.weeklyDiscount]);

  /**
   * Monthly discount tooltip
   * @type {object}
   */
  const monthlyDiscountTooltip = useMemo(() => {
    const { mounthlyDiscount, pricePerDay } = formik.values;

    if (!isPresent(mounthlyDiscount) || !isPresent(pricePerDay)) {
      return { id: 'listing.pricingAndDiscounts.monthlyDiscount.tooltip' };
    }

    const monthCost = pricePerDay * DAYS_IN.MONTH;
    const discount = (monthCost / 100) * Number(mounthlyDiscount);

    return {
      id: 'shared.monthlyPriceTooltip',
      values: {
        percents: `${mounthlyDiscount}%`,
        discount: `$${discount.toFixed(1)}`,
      },
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.pricePerDay, formik.values.mounthlyDiscount]);

  return {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    onBackRoute,
    weeklyDiscountTooltip,
    monthlyDiscountTooltip,
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
    ctx.store.dispatch(fetchListingPricing(listingId));
  }
};

export default useContainer;
