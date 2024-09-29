import { renderHook } from '@testing-library/react-hooks';

import { fetchSelf } from 'state/concepts/users/actions';
import { isUserLoggedInSelector } from 'state/concepts/session/selectors';
import { store } from '__mocks__/react-redux';
import { router, useRouter } from '__mocks__/next/router';
import useContainer, { getInitialProps } from '../hook';

jest.mock('state/concepts/session/selectors', () => ({
  isUserLoggedInSelector: jest.fn(() => true),
}));
jest.mock('utils/auth/checkAuthCompleteness');
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));

useRouter.mockImplementationOnce(
  jest.fn(() => ({
    ...router,
    query: {
      invitation_id: 'invitation_id',
    },
  })),
);

describe('SignUp useContainer hook', () => {
  let result = null;
  const ctx = {
    store,
    req: {},
  };

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
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

      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('when isn`t server', async () => {
      await getInitialProps({
        ...ctx,
        req: null,
      });

      expect(store.logicMiddleware.whenComplete).not.toHaveBeenCalled();
    });
  });
});
