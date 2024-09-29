import { propOr } from 'ramda';

import { LISTING_PATH_BY_STATUS, LISTING_STEP_STATUS } from 'constants/listing';

import redirect from 'utils/redirect';
import { createRoute } from 'utils/createRouteHelpers';

import { listingSelector } from 'state/concepts/listings/selectors';

const checkListingAbilityToEdit = (ctx) => {
  const { listingId } = ctx.query;
  const listing = listingSelector(ctx.store.getState(), listingId);

  // compute redirect route via listing step status
  const stepStatus = propOr(LISTING_STEP_STATUS.INITIAL, 'applicationStep', listing);
  const isFinished = stepStatus === LISTING_STEP_STATUS.FINISHED;
  const pathname = LISTING_PATH_BY_STATUS[stepStatus];
  const redirectRoute = createRoute({ pathname, id: listingId });

  // redirect to add new listing flow if listing step status isn`t finished
  if (!isFinished) {
    redirect(redirectRoute, ctx);
  }
};

export default checkListingAbilityToEdit;
