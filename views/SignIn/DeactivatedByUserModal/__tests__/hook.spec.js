import { renderHook } from '@testing-library/react-hooks';

import ROUTES from 'constants/routes';
import { userActivateAccount, userSignOut } from 'state/concepts/session/actions';

import { dispatch } from '__mocks__/react-redux';
import useContainer from '../hook';

describe('DeactivatedByUserModal useContainer hook', () => {
  const onClose = jest.fn();
  const { result } = renderHook(() => useContainer({ onClose }));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('tests `onCancelHandler` method', () => {
    beforeEach(() => {
      result.current.onCancelHandler();
    });

    it('should dispatches userSignOut action', () => {
      expect(dispatch).toHaveBeenCalledWith(userSignOut());
    });

    it('should calls onClose callback', () => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  it('should dispatches userActivateAccount when called `onConfirmHandler` method', () => {
    result.current.onConfirmHandler();

    expect(dispatch).toHaveBeenCalledWith(
      userActivateAccount({ redirectRoute: ROUTES.INDEX.PATH, isModal: true }),
    );
  });
});
