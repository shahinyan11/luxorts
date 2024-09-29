import { renderHook } from '@testing-library/react-hooks';

import { PASSWORD_UPDATE_SUCCESS_STATUS } from 'constants/statuses';
import { fetchSelf } from 'state/concepts/users/actions';
import { isUserLoggedInSelector } from 'state/concepts/session/selectors';
import { showMessage } from 'state/flash-messages/actions';

import { store } from '__mocks__/react-redux';
import { MESSAGE_DURATION } from 'state/flash-messages/messagesTypes';
import useContainer, { getInitialProps } from '../hook';

jest.mock('state/concepts/session/selectors', () => ({
  isUserLoggedInSelector: jest.fn(() => true),
}));
jest.mock('utils/auth/checkAuthCompleteness');
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));

describe('SignIn useContainer hook', () => {
  const { result } = renderHook(useContainer);
  const ctx = {
    store,
    query: {
      password_update: PASSWORD_UPDATE_SUCCESS_STATUS,
    },
    req: {},
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('getInitialProps method', () => {
    it('when is server and user is logged in', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledWith(fetchSelf());
      expect(store.logicMiddleware.whenComplete).toHaveBeenCalled();
    });

    it('when user isn`t logged in', async () => {
      isUserLoggedInSelector.mockReturnValueOnce(false);
      await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalledWith(fetchSelf());
    });

    it('when isn`t server', async () => {
      await getInitialProps({
        ...ctx,
        req: null,
      });

      expect(store.logicMiddleware.whenComplete).not.toHaveBeenCalled();
    });

    it('when password_update is present and equals `success`', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledWith(
        showMessage({
          description: { id: 'shared.yourPasswordHasBeenUpdated' },
          duration: MESSAGE_DURATION.STATIC,
        }),
      );
    });

    it('when password_update is present and does not equals `success`', async () => {
      await getInitialProps({
        ...ctx,
        query: {
          password_update: 'fail',
        },
      });

      expect(store.dispatch).not.toHaveBeenCalledWith(
        showMessage({
          description: { id: 'shared.yourPasswordHasBeenUpdated' },
          duration: MESSAGE_DURATION.STATIC,
        }),
      );
    });

    it('when password_update isn`t present', async () => {
      await getInitialProps({
        ...ctx,
        query: null,
      });

      expect(store.dispatch).not.toHaveBeenCalledWith(
        showMessage({
          description: { id: 'shared.yourPasswordHasBeenUpdated' },
          duration: MESSAGE_DURATION.STATIC,
        }),
      );
    });
  });
});
