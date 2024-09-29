import { USER_LOGIN_REDIRECT_BY_STATUS, USER_VERIFIED_STATUS } from 'constants';
import isAuth from 'utils/auth/isAuth';
import redirect from 'utils/redirect';
import { currentUserSelector } from 'state/concepts/session/selectors';

const checkUserVerification = (ctx) => {
  const isAuthUser = isAuth(ctx);
  const currentUser = currentUserSelector(ctx.store.getState());
  const isAccountVerified = currentUser?.verifiedStatus === USER_VERIFIED_STATUS.PHONE_VERIFIED;

  if (!isAuthUser) {
    return false;
  }

  if (!isAccountVerified) {
    return redirect(USER_LOGIN_REDIRECT_BY_STATUS[currentUser.verifiedStatus], ctx);
  }

  return true;
};

export default checkUserVerification;
