import { renderHook } from '@testing-library/react-hooks';

import ROUTES from 'constants/routes';
import { USER_ROLE } from 'constants';

import redirect from 'utils/redirect';
import authenticate from 'lib/authenticate';

import { isUserLoggedInSelector } from 'state/concepts/session/selectors';
import { userResendForgotPasswordEmail } from 'state/concepts/session/actions';
import { dispatch, store } from '__mocks__/react-redux';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/redirect');
jest.mock('lib/authenticate', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/session/selectors', () => ({
  isUserLoggedInSelector: jest.fn(() => true),
}));

describe('RecoverPassword useContainer hook', () => {
  const { result } = renderHook(useContainer);

  beforeEach(() => {
    redirect.mockClear();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('should dispatches userResendForgotPasswordEmail when called onResendClickHandler', () => {
    result.current.onResendClickHandler();

    expect(dispatch).toHaveBeenCalledWith(userResendForgotPasswordEmail());
  });

  describe('getInitialProps method', () => {
    const ctx = { store };

    it('should calls authenticate for checking as user', async () => {
      await getInitialProps(ctx);

      expect(authenticate).toHaveBeenCalledWith(USER_ROLE.USER, ctx);
    });

    describe('should redirects', () => {
      it('when user is authorized and email isn`t present', async () => {
        await getInitialProps(ctx);

        expect(redirect).toHaveBeenCalledWith(ROUTES.SIGN_IN.PATH, ctx);
      });

      it('when user is authorized, email is present and user is logged in', async () => {
        const context = {
          ...ctx,
          query: {
            email: 'email',
          },
        };
        await getInitialProps(context);

        expect(redirect).toHaveBeenCalledWith(ROUTES.SIGN_IN.PATH, context);
      });
    });

    describe('shouldn`t redirects', () => {
      beforeAll(() => {
        redirect.mockClear();
      });

      it('when user isn`t authorized', async () => {
        authenticate.mockReturnValueOnce(false);

        await getInitialProps(ctx);

        expect(redirect).not.toHaveBeenCalled();
      });

      it('when user is authorized, email is present, and user isn`t logged in', async () => {
        isUserLoggedInSelector.mockReturnValueOnce(false);

        await getInitialProps({
          ...ctx,
          query: {
            email: 'email',
          },
        });

        expect(redirect).not.toHaveBeenCalled();
      });
    });
  });
});
