import ROUTES from 'constants/routes';
import { USER_VERIFIED_STATUS } from 'constants';

import redirect from 'utils/redirect';
import { currentUserSelector } from 'state/concepts/session/selectors';

import checkAuthCompleteness from '../checkAuthCompleteness';

jest.mock('utils/redirect');
jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => null),
}));

describe('checkAuthCompleteness()', () => {
  const ctx = {
    store: {
      getState: jest.fn(),
    },
    pathname: '/test',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shouldn`t redirect when user isn`t logged in and current page is one of auth routes', () => {
    checkAuthCompleteness({
      ...ctx,
      pathname: ROUTES.SIGN_UP.PATH,
    });
    expect(redirect).not.toHaveBeenCalled();
  });

  it('should redirect to /sign-up when user isn`t logged in and current page isn`t one of auth routes', () => {
    checkAuthCompleteness(ctx);
    expect(redirect).toHaveBeenCalledWith(ROUTES.SIGN_UP.PATH, ctx);
  });

  it('should redirect to /email-verification when user is logged in and verified status equals unverified', () => {
    currentUserSelector.mockReturnValueOnce({
      id: 'id',
      verifiedStatus: USER_VERIFIED_STATUS.UNVERIFIED,
    });

    checkAuthCompleteness(ctx);
    expect(redirect).toHaveBeenCalledWith(ROUTES.EMAIL_VERIFICATION.PATH, ctx);
  });

  it('should redirect to /phone-verification when user is logged in and verified status equals email_verified', () => {
    currentUserSelector.mockReturnValueOnce({
      id: 'id',
      verifiedStatus: USER_VERIFIED_STATUS.EMAIL_VERIFIED,
    });

    checkAuthCompleteness(ctx);
    expect(redirect).toHaveBeenCalledWith(ROUTES.PHONE_VERIFICATION.PATH, ctx);
  });

  it('should redirect to homepage  when user is logged in and verified status equals phone_verified', () => {
    currentUserSelector.mockReturnValueOnce({
      id: 'id',
      verifiedStatus: USER_VERIFIED_STATUS.PHONE_VERIFIED,
    });

    checkAuthCompleteness(ctx);
    expect(redirect).toHaveBeenCalledWith(ROUTES.INDEX.PATH, ctx);
  });

  it('when user is logged in and current page is one of auth routes', () => {
    currentUserSelector.mockReturnValueOnce({
      id: 'id',
      verifiedStatus: USER_VERIFIED_STATUS.PHONE_VERIFIED,
    });

    const context = {
      ...ctx,
      pathname: ROUTES.SIGN_UP.PATH,
    };

    checkAuthCompleteness(context);
    expect(redirect).toHaveBeenCalledWith(ROUTES.INDEX.PATH, context);
  });
});
