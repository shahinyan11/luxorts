import { USER_ROLE } from 'constants';
import authenticate from 'lib/authenticate';
import { isUserLoggedInSelector } from 'state/concepts/session/selectors';

import isAuth from '../isAuth';

jest.mock('lib/authenticate');
jest.mock('state/concepts/session/selectors', () => ({
  isUserLoggedInSelector: jest.fn(() => true),
}));

describe('isAuth util', () => {
  const ctx = {
    store: {
      getState: jest.fn(),
    },
  };

  it('should calls authenticate with User role', () => {
    isAuth(ctx);

    expect(authenticate).toHaveBeenCalledWith(USER_ROLE.USER, ctx);
  });

  it('should returns undefined when user isn`t authorized and logged in', () => {
    const result = isAuth(ctx);

    expect(result).toBe(undefined);
  });

  it('should returns true when user is authorized and logged in', () => {
    authenticate.mockReturnValueOnce(true);
    const result = isAuth(ctx);

    expect(result).toBe(true);
  });

  it('should returns false when user is authorized and logged out', () => {
    authenticate.mockReturnValueOnce(true);
    isUserLoggedInSelector.mockReturnValueOnce(false);
    const result = isAuth(ctx);

    expect(result).toBe(false);
  });
});
