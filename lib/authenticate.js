import cookies from 'next-cookies';

import ROUTES from 'constants/routes';
import { USER_ROLE } from 'constants';
import redirect from 'utils/redirect';

const authenticate = (accessLevel, ctx) => {
  const { tokens } = cookies(ctx);

  if (accessLevel === USER_ROLE.USER && !tokens?.access) return redirect(ROUTES.SIGN_IN.PATH, ctx);
  if (accessLevel === USER_ROLE.GUEST && tokens?.access) return redirect(ROUTES.INDEX.PATH, ctx);

  return true;
};

export default authenticate;
