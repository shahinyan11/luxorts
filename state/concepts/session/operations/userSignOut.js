import { createLogic } from 'redux-logic';
import clientCookie from 'component-cookie';

import ROUTES from 'constants/routes';

import showErrorNotifications from 'utils/showErrorNotifications';
import removeCookieIsomorphic from 'utils/removeCookieIsomorphic';
import redirect from 'utils/redirect';

import { USER_SIGN_OUT } from 'state/concepts/session/types';
import { userSignOutSuccess } from 'state/concepts/session/actions';
import { signOutUserEndpoint } from 'state/concepts/session/endpoints';

const userSignOut = createLogic({
  type: USER_SIGN_OUT,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { url } = signOutUserEndpoint;
    const tokens = clientCookie('tokens');
    const { refresh } = JSON.parse(tokens);

    try {
      removeCookieIsomorphic(null, 'tokens');
      removeCookieIsomorphic(null, 'currentUser');

      dispatch(userSignOutSuccess());

      await httpClient.delete(url, {
        headers: {
          'X-Refresh-Token': refresh,
        },
      });

      redirect(ROUTES.INDEX.PATH);
    } catch (error) {
      showErrorNotifications({ error, dispatch });
    }

    done();
  },
});

export default userSignOut;
