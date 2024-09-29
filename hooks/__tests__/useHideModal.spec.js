import { renderHook } from '@testing-library/react-hooks';

import { hideModal } from 'state/modal/actions';
import { dispatch } from '__mocks__/react-redux';

import useHideModal from '../useHideModal';

describe('useHideModal hook', () => {
  const { result } = renderHook(useHideModal);

  it('should dispatches hideModal action', () => {
    result.current();

    expect(dispatch).toHaveBeenCalledWith(hideModal());
  });
});
