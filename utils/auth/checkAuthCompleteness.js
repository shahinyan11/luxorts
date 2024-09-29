import ROUTES, { AUTH_ROUTES } from 'constants/routes';
import { USER_LOGIN_REDIRECT_BY_STATUS } from 'constants';

import redirect from 'utils/redirect';
import isPresent from 'utils/isPresent';

import { currentUserSelector } from 'state/concepts/session/selectors';

const checkAuthCompleteness = (ctx) => {
  let redirectRoute = null;
  const currentUser = currentUserSelector(ctx.store.getState());
  const isUserLoggedIn = isPresent(currentUser);

  if (!isUserLoggedIn && !AUTH_ROUTES.includes(ctx.pathname)) {
    redirectRoute = ROUTES.SIGN_UP.PATH;
  }

  if (isUserLoggedIn && AUTH_ROUTES.includes(ctx.pathname)) {
    redirectRoute = USER_LOGIN_REDIRECT_BY_STATUS[currentUser.verifiedStatus];
  }

  if (isUserLoggedIn && !AUTH_ROUTES.includes(ctx.pathname)) {
    const route = USER_LOGIN_REDIRECT_BY_STATUS[currentUser.verifiedStatus];
    redirectRoute = route !== ctx.pathname ? route : null;
  }

  if (redirectRoute) {
    redirect(redirectRoute, ctx);
  }
};

export default checkAuthCompleteness;
