import { USER_ROLE } from 'constants';
import authenticate from 'lib/authenticate';
import { isUserLoggedInSelector } from 'state/concepts/session/selectors';

const isAuth = (ctx) => {
  const isUser = authenticate(USER_ROLE.USER, ctx);
  const isUserLoggedIn = isUserLoggedInSelector(ctx.store.getState());

  return isUser && isUserLoggedIn;
};

export default isAuth;
