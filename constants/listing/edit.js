import { compose, omit, values } from 'ramda';

import ROUTES from 'constants/routes';

// eslint-disable-next-line import/prefer-default-export
export const EDIT_LISTING_TABS = compose(
  values,
  omit(['KEY', 'PATH', 'META']),
)(ROUTES.DASHBOARD.LISTINGS);
