import { propOr } from 'ramda';

import { LISTING_PATH_BY_STATUS, LISTING_STEP_STATUS } from 'constants/listing';

import isPresent from 'utils/isPresent';
import redirect from 'utils/redirect';
import { createRoute } from 'utils/createRouteHelpers';

import { listingSelector } from 'state/concepts/listings/selectors';

const checkListingCompleteness = (ctx) => {
  const { listingId } = ctx.query;
  const listing = listingSelector(ctx.store.getState(), listingId);

  // compute redirect route via listing step status
  const stepStatus = propOr(LISTING_STEP_STATUS.INITIAL, 'applicationStep', listing);
  const pathname = LISTING_PATH_BY_STATUS[stepStatus];
  const redirectRoute = isPresent(listing) ? createRoute({ pathname, id: listingId }) : pathname;

  // skip redirect if current pathname equals computed destination
  if (ctx.asPath !== redirectRoute) {
    redirect(redirectRoute, ctx);
  }
};

export default checkListingCompleteness;
