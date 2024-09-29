import cookies from 'next-cookies';

import { USER_ROLE } from 'constants';
import ROUTES from 'constants/routes';
import redirect from 'utils/redirect';
import authenticate from '../authenticate';

jest.mock('next-cookies', () => jest.fn(() => ({})));
jest.mock('utils/redirect');

describe('authenticate()', () => {
  const ctx = { ctxKey: 'ctx value' };
  const tokens = { access: 'access' };

  beforeEach(() => redirect.mockClear());

  describe('when accessLevel == user', () => {
    const accessLevel = USER_ROLE.USER;

    it('triggers redirect if tokens absent', () => {
      expect(authenticate(accessLevel, ctx)).toEqual(undefined);
      expect(redirect).toHaveBeenCalledWith(ROUTES.SIGN_IN.PATH, ctx);
    });

    it('returns true if tokens exists', () => {
      cookies.mockReturnValueOnce({ tokens });
      expect(authenticate(accessLevel, ctx)).toEqual(true);
    });
  });

  describe('when accessLevel == guest', () => {
    const accessLevel = USER_ROLE.GUEST;

    it('triggers redirect if tokens present', () => {
      cookies.mockReturnValueOnce({ tokens });
      expect(authenticate(accessLevel, ctx)).toEqual(undefined);
      expect(redirect).toHaveBeenCalledWith(ROUTES.INDEX.PATH, ctx);
    });

    it('returns true if tokens absent', () => {
      expect(authenticate(accessLevel, ctx)).toEqual(true);
    });
  });
});
