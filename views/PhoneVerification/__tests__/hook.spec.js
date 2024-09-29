import { renderHook } from '@testing-library/react-hooks';

import { fetchSelf } from 'state/concepts/users/actions';
import { currentUserSelector } from 'state/concepts/session/selectors';

import { store } from '__mocks__/react-redux';
import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import useContainer, { getInitialProps } from '../hook';

jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
}));
jest.mock('utils/auth/checkAuthCompleteness');
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));

describe('PhoneVerification useContainer hook', () => {
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
      const res = await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledWith(fetchSelf());
      expect(store.logicMiddleware.whenComplete).toHaveBeenCalled();
      expect(res).toStrictEqual({ currentUser: mockedCurrentUser });
    });

    it('when user isn`t logged in', async () => {
      currentUserSelector.mockReturnValueOnce(null);
      const res = await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalled();
      expect(res).toEqual({ currentUser: null });
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
