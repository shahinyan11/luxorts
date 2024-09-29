import { USER_LOGIN_REDIRECT_BY_STATUS, USER_VERIFIED_STATUS } from 'constants';

import isAuth from 'utils/auth/isAuth';
import redirect from 'utils/redirect';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';
import { currentUserSelector } from 'state/concepts/session/selectors';

import checkUserVerification from '../checkUserVerification';

jest.mock('utils/auth/isAuth', () => jest.fn(() => true));
jest.mock('utils/redirect');
jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
}));

describe('checkUserVerification util', () => {
  const ctx = {
    store: {
      getState: jest.fn(),
    },
  };

  it('should redirects when user is authorized and account is unverified', () => {
    checkUserVerification(ctx);

    expect(redirect).toHaveBeenCalledWith(
      USER_LOGIN_REDIRECT_BY_STATUS[mockedCurrentUser.verifiedStatus],
      ctx,
    );
  });

  it('should returns true when user is authorized and account is verified', () => {
    currentUserSelector.mockReturnValueOnce({
      ...mockedCurrentUser,
      verifiedStatus: USER_VERIFIED_STATUS.PHONE_VERIFIED,
    });

    expect(checkUserVerification(ctx)).toBe(true);
  });

  it('should returns false when user isn`t authorized', () => {
    isAuth.mockReturnValueOnce(false);

    expect(checkUserVerification(ctx)).toBe(false);
  });
});
