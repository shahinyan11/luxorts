import { act, renderHook } from '@testing-library/react-hooks';

import { dispatch, store } from '__mocks__/react-redux';

import checkUserVerification from 'utils/auth/checkUserVerification';

import { hideModal, showModal } from 'state/modal/actions';
import { fetchSelf } from 'state/concepts/users/actions';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('state/concepts/users/selectors', () => ({
  passwordUpdatedDateSelector: jest.fn(() => 1),
}));

describe('LoginAndSecurity useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('toggleUpdateMode method toggles updateMode state value', () => {
    act(() => {
      result.current.toggleUpdateMode();
    });

    expect(result.current.updateMode).toBe(!result.updateMode);
  });

  it('handleRecoverClick method should dispatch showModal action', () => {
    result.current.handleRecoverClick();

    expect(dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'RECOVER_PASSWORD_MODAL',
      }),
    );
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
      query: {
        action: 'recover',
      },
    };

    it('should dispatches all actions when user is verified and query.action is present and equals `recover`', async () => {
      await getInitialProps(ctx);

      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, hideModal());
      expect(dispatch).toHaveBeenNthCalledWith(2, fetchSelf());
    });

    it('shouldn`t dispatches hideModal() when query.action isn`t present', async () => {
      await getInitialProps({
        ...ctx,
        query: null,
      });

      expect(dispatch).not.toHaveBeenCalledWith(hideModal());
    });

    it('shouldn`t dispatches any actions when user isn`t verified', async () => {
      checkUserVerification.mockReturnValueOnce(false);

      await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });
});
