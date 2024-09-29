import { passwordUpdatedAtSelector } from 'state/data/selectors';

import { fetchSelfEndpoint } from './endpoints';

// eslint-disable-next-line import/prefer-default-export
export const passwordUpdatedDateSelector = (state) =>
  passwordUpdatedAtSelector(state, fetchSelfEndpoint.endpoint);
