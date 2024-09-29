import { renderHook } from '@testing-library/react-hooks';

import ROUTES from 'constants/routes';

import { router } from '__mocks__/next/router';
import useContainer from '../hook';

describe('DeactivatedByAdminModal useContainer hook', () => {
  const onClose = jest.fn();
  const { result } = renderHook(() => useContainer({ onClose }));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('tests `onConfirmHandler` method', () => {
    beforeEach(() => {
      result.current.onConfirmHandler();
    });

    it('should calls router push', () => {
      expect(router.push).toHaveBeenCalledWith(ROUTES.SUPPORT.PATH);
    });

    it('should calls onClose callback', () => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});
