import { createLogic } from 'redux-logic';

import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import { UPDATE_USER } from 'state/concepts/session/types';
import { currentUserSelector } from 'state/concepts/session/selectors';

const updateUser = createLogic({
  type: UPDATE_USER,
  latest: true,

  process({ getState }, _, done) {
    const currentUser = currentUserSelector(getState());

    setCookieIsomorphic(null, 'currentUser', JSON.stringify(currentUser));

    done();
  },
});

export default updateUser;
