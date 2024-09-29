import endpoint from 'utils/endpoint';
import { userAccountRoute } from 'lib/apiRoutes';
import { FETCH_SELF } from 'state/concepts/users/types';

// eslint-disable-next-line import/prefer-default-export
export const fetchSelfEndpoint = endpoint(FETCH_SELF, 'GET', userAccountRoute);
